// @ts-check
import { defineConfig } from "astro/config";

import node from '@astrojs/node';
import compressor from "astro-compressor";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),

  integrations: [
    compressor({
      gzip: true,
      brotli: false,
      fileExtensions: [".css", ".js", ".html", ".mjs", ".svg"],
    }),
  ],
  i18n: {
    defaultLocale: "uz",
    locales: ["uz", "en", "ru"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
