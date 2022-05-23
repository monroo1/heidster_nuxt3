import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  ssr: true,

  head: {
    title: "Heidster Studio",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["~/assets/css/style.css"],

  components: {
    global: true,
    dirs: ["~/components"],
  },
});
