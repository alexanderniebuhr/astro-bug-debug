const updateScrollPosition = (positions) => history.state && history.replaceState({ ...history.state, ...positions }, "");
const inBrowser = import.meta.env.SSR === false;
const supportsViewTransitions = inBrowser && !!document.startViewTransition;
const transitionEnabledOnThisPage = () => inBrowser && !!document.querySelector('[name="astro-view-transitions-enabled"]');
const samePage = (otherLocation) => location.pathname === otherLocation.pathname && location.search === otherLocation.search;
const triggerEvent = (name) => document.dispatchEvent(new Event(name));
const onPageLoad = () => triggerEvent("astro:page-load");
const announce = () => {
  let div = document.createElement("div");
  div.setAttribute("aria-live", "assertive");
  div.setAttribute("aria-atomic", "true");
  div.className = "astro-route-announcer";
  document.body.append(div);
  setTimeout(
    () => {
      let title = document.title || document.querySelector("h1")?.textContent || location.pathname;
      div.textContent = title;
    },
    // Much thought went into this magic number; the gist is that screen readers
    // need to see that the element changed and might not do so if it happens
    // too quickly.
    60
  );
};
const PERSIST_ATTR = "data-astro-transition-persist";
const VITE_ID = "data-vite-dev-id";
let parser;
let currentHistoryIndex = 0;
if (inBrowser) {
  if (history.state) {
    currentHistoryIndex = history.state.index;
    scrollTo({ left: history.state.scrollX, top: history.state.scrollY });
  } else if (transitionEnabledOnThisPage()) {
    history.replaceState({ index: currentHistoryIndex, scrollX, scrollY, intraPage: false }, "");
  }
}
const throttle = (cb, delay) => {
  let wait = false;
  let onceMore = false;
  return (...args) => {
    if (wait) {
      onceMore = true;
      return;
    }
    cb(...args);
    wait = true;
    setTimeout(() => {
      if (onceMore) {
        onceMore = false;
        cb(...args);
      }
      wait = false;
    }, delay);
  };
};
async function fetchHTML(href, init) {
  try {
    const res = await fetch(href, init);
    const mediaType = res.headers.get("content-type")?.replace(/;.*$/, "");
    if (mediaType !== "text/html" && mediaType !== "application/xhtml+xml") {
      return null;
    }
    const html = await res.text();
    return {
      html,
      redirected: res.redirected ? res.url : void 0,
      mediaType
    };
  } catch (err) {
    return null;
  }
}
function getFallback() {
  const el = document.querySelector('[name="astro-view-transitions-fallback"]');
  if (el) {
    return el.getAttribute("content");
  }
  return "animate";
}
function runScripts() {
  let wait = Promise.resolve();
  for (const script of Array.from(document.scripts)) {
    if (script.dataset.astroExec === "")
      continue;
    const newScript = document.createElement("script");
    newScript.innerHTML = script.innerHTML;
    for (const attr of script.attributes) {
      if (attr.name === "src") {
        const p = new Promise((r) => {
          newScript.onload = r;
        });
        wait = wait.then(() => p);
      }
      newScript.setAttribute(attr.name, attr.value);
    }
    newScript.dataset.astroExec = "";
    script.replaceWith(newScript);
  }
  return wait;
}
function isInfinite(animation) {
  const effect = animation.effect;
  if (!effect || !(effect instanceof KeyframeEffect) || !effect.target)
    return false;
  const style = window.getComputedStyle(effect.target, effect.pseudoElement);
  return style.animationIterationCount === "infinite";
}
const moveToLocation = (toLocation, replace, intraPage) => {
  const fresh = !samePage(toLocation);
  let scrolledToTop = false;
  if (toLocation.href !== location.href) {
    if (replace) {
      history.replaceState({ ...history.state }, "", toLocation.href);
    } else {
      history.replaceState({ ...history.state, intraPage }, "");
      history.pushState(
        { index: ++currentHistoryIndex, scrollX: 0, scrollY: 0 },
        "",
        toLocation.href
      );
    }
    if (fresh) {
      scrollTo({ left: 0, top: 0, behavior: "instant" });
      scrolledToTop = true;
    }
  }
  if (toLocation.hash) {
    location.href = toLocation.href;
  } else {
    if (!scrolledToTop) {
      scrollTo({ left: 0, top: 0, behavior: "instant" });
    }
  }
};
function stylePreloadLinks(newDocument) {
  const links = [];
  for (const el of newDocument.querySelectorAll("head link[rel=stylesheet]")) {
    if (!document.querySelector(
      `[${PERSIST_ATTR}="${el.getAttribute(
        PERSIST_ATTR
      )}"], link[rel=stylesheet][href="${el.getAttribute("href")}"]`
    )) {
      const c = document.createElement("link");
      c.setAttribute("rel", "preload");
      c.setAttribute("as", "style");
      c.setAttribute("href", el.getAttribute("href"));
      links.push(
        new Promise((resolve) => {
          ["load", "error"].forEach((evName) => c.addEventListener(evName, resolve));
          document.head.append(c);
        })
      );
    }
  }
  return links;
}
async function updateDOM(newDocument, toLocation, options, popState, fallback) {
  const persistedHeadElement = (el) => {
    const id = el.getAttribute(PERSIST_ATTR);
    const newEl = id && newDocument.head.querySelector(`[${PERSIST_ATTR}="${id}"]`);
    if (newEl) {
      return newEl;
    }
    if (el.matches("link[rel=stylesheet]")) {
      const href = el.getAttribute("href");
      return newDocument.head.querySelector(`link[rel=stylesheet][href="${href}"]`);
    }
    return null;
  };
  const saveFocus = () => {
    const activeElement = document.activeElement;
    if (activeElement?.closest(`[${PERSIST_ATTR}]`)) {
      if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement) {
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;
        return { activeElement, start, end };
      }
      return { activeElement };
    } else {
      return { activeElement: null };
    }
  };
  const restoreFocus = ({ activeElement, start, end }) => {
    if (activeElement) {
      activeElement.focus();
      if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement) {
        activeElement.selectionStart = start;
        activeElement.selectionEnd = end;
      }
    }
  };
  const swap = () => {
    const html = document.documentElement;
    const astro = [...html.attributes].filter(
      ({ name }) => (html.removeAttribute(name), name.startsWith("data-astro-"))
    );
    [...newDocument.documentElement.attributes, ...astro].forEach(
      ({ name, value }) => html.setAttribute(name, value)
    );
    for (const s1 of document.scripts) {
      for (const s2 of newDocument.scripts) {
        if (
          // Inline
          !s1.src && s1.textContent === s2.textContent || // External
          s1.src && s1.type === s2.type && s1.src === s2.src
        ) {
          s2.dataset.astroExec = "";
          break;
        }
      }
    }
    for (const el of Array.from(document.head.children)) {
      const newEl = persistedHeadElement(el);
      if (newEl) {
        newEl.remove();
      } else {
        el.remove();
      }
    }
    document.head.append(...newDocument.head.children);
    const oldBody = document.body;
    const savedFocus = saveFocus();
    document.body.replaceWith(newDocument.body);
    for (const el of oldBody.querySelectorAll(`[${PERSIST_ATTR}]`)) {
      const id = el.getAttribute(PERSIST_ATTR);
      const newEl = document.querySelector(`[${PERSIST_ATTR}="${id}"]`);
      if (newEl) {
        newEl.replaceWith(el);
      }
    }
    restoreFocus(savedFocus);
    if (popState) {
      scrollTo(popState.scrollX, popState.scrollY);
    } else {
      moveToLocation(toLocation, options.history === "replace", false);
    }
    triggerEvent("astro:after-swap");
  };
  const links = stylePreloadLinks(newDocument);
  links.length && await Promise.all(links);
  if (fallback === "animate") {
    const currentAnimations = document.getAnimations();
    document.documentElement.dataset.astroTransitionFallback = "old";
    const newAnimations = document.getAnimations().filter((a) => !currentAnimations.includes(a) && !isInfinite(a));
    const finished = Promise.all(newAnimations.map((a) => a.finished));
    await finished;
    swap();
    document.documentElement.dataset.astroTransitionFallback = "new";
  } else {
    swap();
  }
}
async function transition(direction, toLocation, options, popState) {
  let finished;
  const href = toLocation.href;
  const init = {};
  if (options.formData) {
    init.method = "POST";
    init.body = options.formData;
  }
  const response = await fetchHTML(href, init);
  if (response === null) {
    location.href = href;
    return;
  }
  if (response.redirected) {
    toLocation = new URL(response.redirected);
  }
  parser ??= new DOMParser();
  const newDocument = parser.parseFromString(response.html, response.mediaType);
  newDocument.querySelectorAll("noscript").forEach((el) => el.remove());
  if (!newDocument.querySelector('[name="astro-view-transitions-enabled"]') && !options.formData) {
    location.href = href;
    return;
  }
  if (import.meta.env.DEV)
    await prepareForClientOnlyComponents(newDocument, toLocation);
  if (!popState) {
    history.replaceState({ ...history.state, scrollX, scrollY }, "");
  }
  document.documentElement.dataset.astroTransition = direction;
  if (supportsViewTransitions) {
    finished = document.startViewTransition(
      () => updateDOM(newDocument, toLocation, options, popState)
    ).finished;
  } else {
    finished = updateDOM(newDocument, toLocation, options, popState, getFallback());
  }
  try {
    await finished;
  } finally {
    await runScripts();
    onPageLoad();
    announce();
  }
}
let navigateOnServerWarned = false;
function navigate(href, options) {
  if (inBrowser === false) {
    if (!navigateOnServerWarned) {
      const warning = new Error(
        "The view transtions client API was called during a server side render. This may be unintentional as the navigate() function is expected to be called in response to user interactions. Please make sure that your usage is correct."
      );
      warning.name = "Warning";
      console.warn(warning);
      navigateOnServerWarned = true;
    }
    return;
  }
  if (!transitionEnabledOnThisPage()) {
    location.href = href;
    return;
  }
  const toLocation = new URL(href, location.href);
  if (location.origin === toLocation.origin && samePage(toLocation)) {
    moveToLocation(toLocation, options?.history === "replace", true);
  } else {
    transition("forward", toLocation, options ?? {});
  }
}
function onPopState(ev) {
  if (!transitionEnabledOnThisPage() && ev.state) {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    location.reload();
    return;
  }
  if (ev.state === null) {
    if (history.scrollRestoration) {
      history.scrollRestoration = "auto";
    }
    return;
  }
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
  const state = history.state;
  if (state.intraPage) {
    scrollTo(state.scrollX, state.scrollY);
  } else {
    const nextIndex = state.index;
    const direction = nextIndex > currentHistoryIndex ? "forward" : "back";
    currentHistoryIndex = nextIndex;
    transition(direction, new URL(location.href), {}, state);
  }
}
const onScroll = () => {
  updateScrollPosition({ scrollX, scrollY });
};
if (inBrowser) {
  if (supportsViewTransitions || getFallback() !== "none") {
    addEventListener("popstate", onPopState);
    addEventListener("load", onPageLoad);
    if ("onscrollend" in window)
      addEventListener("scrollend", onScroll);
    else
      addEventListener("scroll", throttle(onScroll, 350), { passive: true });
  }
  for (const script of document.scripts) {
    script.dataset.astroExec = "";
  }
}
async function prepareForClientOnlyComponents(newDocument, toLocation) {
  if (newDocument.body.querySelector(`astro-island[client='only']`)) {
    const nextPage = document.createElement("iframe");
    nextPage.src = toLocation.href;
    nextPage.style.display = "none";
    document.body.append(nextPage);
    nextPage.contentWindow.console = Object.keys(console).reduce((acc, key) => {
      acc[key] = () => {
      };
      return acc;
    }, {});
    await hydrationDone(nextPage);
    const nextHead = nextPage.contentDocument?.head;
    if (nextHead) {
      document.head.querySelectorAll(`style[${PERSIST_ATTR}=""]`).forEach((s) => s.removeAttribute(PERSIST_ATTR));
      const viteIds = [...nextHead.querySelectorAll(`style[${VITE_ID}]`)].map(
        (style) => style.getAttribute(VITE_ID)
      );
      viteIds.forEach((id) => {
        const style = document.head.querySelector(`style[${VITE_ID}="${id}"]`);
        if (style && !newDocument.head.querySelector(`style[${VITE_ID}="${id}"]`)) {
          newDocument.head.appendChild(style.cloneNode(true));
        }
      });
    }
    async function hydrationDone(loadingPage) {
      await new Promise(
        (r) => loadingPage.contentWindow?.addEventListener("load", r, { once: true })
      );
      return new Promise(async (r) => {
        for (let count = 0; count <= 20; ++count) {
          if (!loadingPage.contentDocument.body.querySelector("astro-island[ssr]"))
            break;
          await new Promise((r2) => setTimeout(r2, 50));
        }
        r();
      });
    }
  }
}
export {
  navigate,
  supportsViewTransitions,
  transitionEnabledOnThisPage
};