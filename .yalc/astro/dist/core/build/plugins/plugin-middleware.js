import { vitePluginMiddlewareBuild } from "../../middleware/vite-plugin.js";
import { MIDDLEWARE_MODULE_ID } from "../../middleware/vite-plugin.js";
function pluginMiddleware(opts, internals) {
  return {
    build: "ssr",
    hooks: {
      "build:before": () => {
        return {
          vitePlugin: vitePluginMiddlewareBuild(opts, internals)
        };
      }
    }
  };
}
export {
  MIDDLEWARE_MODULE_ID,
  pluginMiddleware
};
