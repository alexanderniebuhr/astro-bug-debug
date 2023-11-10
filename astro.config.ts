import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server",
  integrations: [
    cloudflare({
      mode: "directory",
      functionPerRoute: true,
      runtime: { mode: "off" },
      imageService: "compile",
    }),
  ],
});
