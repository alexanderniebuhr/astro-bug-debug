const debug = import.meta.env.DEV ? console.debug : void 0;
const inBrowser = import.meta.env.SSR === false;
const prefetchedUrls = /* @__PURE__ */ new Set();
const listenedAnchors = /* @__PURE__ */ new WeakSet();
let prefetchAll = __PREFETCH_PREFETCH_ALL__;
let defaultStrategy = __PREFETCH_DEFAULT_STRATEGY__;
let inited = false;
function init(defaultOpts) {
  if (!inBrowser)
    return;
  if (inited)
    return;
  inited = true;
  debug?.(`[astro] Initializing prefetch script`);
  prefetchAll ??= defaultOpts?.prefetchAll ?? false;
  defaultStrategy ??= defaultOpts?.defaultStrategy ?? "hover";
  initTapStrategy();
  initHoverStrategy();
  initViewportStrategy();
}
function initTapStrategy() {
  for (const event of ["touchstart", "mousedown"]) {
    document.body.addEventListener(
      event,
      (e) => {
        if (elMatchesStrategy(e.target, "tap")) {
          prefetch(e.target.href, { with: "fetch" });
        }
      },
      { passive: true }
    );
  }
}
function initHoverStrategy() {
  let timeout;
  document.body.addEventListener(
    "focusin",
    (e) => {
      if (elMatchesStrategy(e.target, "hover")) {
        handleHoverIn(e);
      }
    },
    { passive: true }
  );
  document.body.addEventListener("focusout", handleHoverOut, { passive: true });
  onPageLoad(() => {
    for (const anchor of document.getElementsByTagName("a")) {
      if (listenedAnchors.has(anchor))
        continue;
      if (elMatchesStrategy(anchor, "hover")) {
        listenedAnchors.add(anchor);
        anchor.addEventListener("mouseenter", handleHoverIn, { passive: true });
        anchor.addEventListener("mouseleave", handleHoverOut, { passive: true });
      }
    }
  });
  function handleHoverIn(e) {
    const href = e.target.href;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      prefetch(href, { with: "fetch" });
    }, 80);
  }
  function handleHoverOut() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = 0;
    }
  }
}
function initViewportStrategy() {
  let observer;
  onPageLoad(() => {
    for (const anchor of document.getElementsByTagName("a")) {
      if (listenedAnchors.has(anchor))
        continue;
      if (elMatchesStrategy(anchor, "viewport")) {
        listenedAnchors.add(anchor);
        observer ??= createViewportIntersectionObserver();
        observer.observe(anchor);
      }
    }
  });
}
function createViewportIntersectionObserver() {
  const timeouts = /* @__PURE__ */ new WeakMap();
  return new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      const anchor = entry.target;
      const timeout = timeouts.get(anchor);
      if (entry.isIntersecting) {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeouts.set(
          anchor,
          setTimeout(() => {
            observer.unobserve(anchor);
            timeouts.delete(anchor);
            prefetch(anchor.href, { with: "link" });
          }, 300)
        );
      } else {
        if (timeout) {
          clearTimeout(timeout);
          timeouts.delete(anchor);
        }
      }
    }
  });
}
function prefetch(url, opts) {
  if (!canPrefetchUrl(url))
    return;
  prefetchedUrls.add(url);
  const priority = opts?.with ?? "link";
  debug?.(`[astro] Prefetching ${url} with ${priority}`);
  if (priority === "link") {
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.setAttribute("href", url);
    document.head.append(link);
  } else {
    fetch(url).catch((e) => {
      console.log(`[astro] Failed to prefetch ${url}`);
      console.error(e);
    });
  }
}
function canPrefetchUrl(url) {
  if (!navigator.onLine)
    return false;
  if ("connection" in navigator) {
    const conn = navigator.connection;
    if (conn.saveData || /(2|3)g/.test(conn.effectiveType))
      return false;
  }
  try {
    const urlObj = new URL(url, location.href);
    return location.origin === urlObj.origin && location.pathname !== urlObj.pathname && !prefetchedUrls.has(url);
  } catch {
  }
  return false;
}
function elMatchesStrategy(el, strategy) {
  if (el?.tagName !== "A")
    return false;
  const attrValue = el.dataset.astroPrefetch;
  if (attrValue === "false") {
    return false;
  }
  if (attrValue == null && prefetchAll || attrValue === "") {
    return strategy === defaultStrategy;
  }
  if (attrValue === strategy) {
    return true;
  }
  return false;
}
function onPageLoad(cb) {
  cb();
  let firstLoad = false;
  document.addEventListener("astro:page-load", () => {
    if (!firstLoad) {
      firstLoad = true;
      return;
    }
    cb();
  });
}
export {
  init,
  prefetch
};