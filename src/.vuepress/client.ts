// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Releases from "./components/Releases.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.use(ElementPlus);
    app.component("Releases", Releases);
  },
});
