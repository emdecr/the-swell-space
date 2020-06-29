import pkg from "./package";

require("dotenv").config();

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "the swell space",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { hid: "twitter:site", name: "twitter:site", content: "@emdecr" },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "the swell space"
      },
      { hid: "twitter:description", name: "twitter:description", content: "" },
      { hid: "twitter:creator", name: "twitter:creator", content: "@emdecr" },
      { hid: "twitter:image", name: "twitter:image", content: "" },
      { hid: "og:title", name: "og:title", content: "the swell space" },
      { hid: "og:type", name: "og:type", content: "Website" },
      { hid: "og:url", name: "og:url", content: "https://theswell.space/" },
      { hid: "og:image", name: "og:image", content: "" },
      { hid: "og:description", name: "og:description", content: "" },
      { hid: "og:site_name", name: "og:site_name", content: "the swell space" }
    ],
    script: [],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "favicons/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "favicons/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "favicons/favicon-32x32.png"
      },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/quu5xdo.css"
      }
    ]
  },
  /*
   ** Used to go to top of page for pagaination
   */
  router: {
    base: process.env.BASE_ROUTER,
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve();
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0 };
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#e3e3e3", height: "3px" },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/typography.css",
    "@/assets/css/layout.css",
    "@/assets/css/global.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/fontawesome",
    "~/plugins/vue-paginate",
    { src: "~/plugins/vue-aos", ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  /*
   ** Server configuration
   */
  server: {
    port: 1515 // default: 3000
  }
};
