import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://autosoftronics.netlify.app", // tu changeras quand domaine final ok
  integrations: [sitemap()],
});