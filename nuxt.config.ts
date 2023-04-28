// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-content-assets", "@nuxt/content"],
  plugins: [{ src: "~/plugins/vercel.js", mode: "client" }],
});
