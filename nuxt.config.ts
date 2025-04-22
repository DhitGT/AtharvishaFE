// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ['material-symbols',"~/assets/css/main.css","~/assets/css/tailwind.css" ],
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@vite-pwa/nuxt","@pinia/nuxt"
  ],
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
      "postcss-nesting": {},
    },
  },
  devServer: {
    // host: "192.168.187.220",
    host: "0.0.0.0",
    port: 3000,
  },
});
