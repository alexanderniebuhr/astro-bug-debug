import * as vite from "vite";
const virtualModuleId = "astro:prefetch";
const resolvedVirtualModuleId = "\0" + virtualModuleId;
const prefetchInternalModuleFsSubpath = "astro/dist/prefetch/index.js";
const prefetchCode = `import { init } from 'astro/prefetch';init()`;
function astroPrefetch({ settings }) {
  const prefetchOption = settings.config.prefetch;
  const prefetch = prefetchOption ? typeof prefetchOption === "object" ? prefetchOption : {} : void 0;
  if (prefetch && settings.scripts.every((s) => s.content !== prefetchCode)) {
    settings.scripts.push({
      stage: "page",
      content: `import { init } from 'astro/prefetch';init()`
    });
  }
  const throwPrefetchNotEnabledError = () => {
    throw new Error("You need to enable the `prefetch` Astro config to import `astro:prefetch`");
  };
  return {
    name: "astro:prefetch",
    async resolveId(id) {
      if (id === virtualModuleId) {
        if (!prefetch)
          throwPrefetchNotEnabledError();
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        if (!prefetch)
          throwPrefetchNotEnabledError();
        return `export { prefetch } from "astro/prefetch";`;
      }
    },
    transform(code, id) {
      if (id.includes(prefetchInternalModuleFsSubpath)) {
        return code.replace("__PREFETCH_PREFETCH_ALL__", JSON.stringify(prefetch?.prefetchAll)).replace("__PREFETCH_DEFAULT_STRATEGY__", JSON.stringify(prefetch?.defaultStrategy));
      }
    }
  };
}
export {
  astroPrefetch as default
};