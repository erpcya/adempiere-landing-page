import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "About",
    icon: "profile",
    prefix: "/about/",
    children: [
      { text: "About", icon: "software", link: "", activeMatch: "^/about/$" },
      {
        text: "News",
        prefix: "news/",
        children: ["2023-01-01-adempiere-394"],
      },
      {
        text: "History",
        children: ["the-beginning"],
      },
    ],
  },
  {
    text: "Product",
    icon: "engine",
    prefix: "/product/",
    children: [
      { text: "Product", icon: "engine", link: "", activeMatch: "^/product/$" },
      {
        text: "Technology",
        children: ["technology", "business-process", "benefits"],
      },
    ],
  },
  {
    text: "Documentation",
    icon: "creative",
    prefix: "/docs/component",
    children: [
      { text: "Docs", link: "https://docs.erpya.com/docs/", icon: "note", activeMatch: "^/docs/$" }
    ],
  },
  {
    text: "Community",
    icon: "group",
    prefix: "/community/",
    children: [
      {
        text: "Community",
        icon: "group",
        link: "",
        activeMatch: "^/community/$",
      },
      {
        text: "ADempiere ERP Community",
        children: ["code-of-conduct", "duties-and-rigths"],
      },
    ],
  },
  {
    text: "Downloads",
    icon: "software",
    prefix: "/downloads/",
    children: [
      {
        text: "Downloads",
        icon: "software",
        link: "",
        activeMatch: "^/downloads/$",
      },
      {
        text: "Binary Files",
        children: ["docker", "binary"],
      },
    ],
  },
]);

export const esNavbarConfig = navbar([
  "/es/",
  {
    text: "Nosotros",
    icon: "profile",
    prefix: "/es/about/",
    children: [
      {
        text: "Nosotros",
        icon: "software",
        link: "",
        activeMatch: "^/about/$",
      },
      {
        text: "Noticias",
        prefix: "news/",
        children: ["2023-01-01-adempiere-394"],
      },
      {
        text: "Historia",
        children: ["the-beginning"],
      },
    ],
  },
  {
    text: "Producto",
    icon: "engine",
    prefix: "/es/product/",
    children: [
      {
        text: "Producto",
        icon: "engine",
        link: "",
        activeMatch: "^/product/$",
      },
      {
        text: "Tecnología",
        children: ["technology", "business-process", "benefits"],
      },
    ],
  },
  {
    text: "Documentación",
    icon: "creative",
    prefix: "/es/docs/",
    children: [
      {
        text: "ADempiere Estándar",
        link: "https://docs.erpya.com/docs/",
        icon: "note",
        activeMatch: "^/docs/$",
      },
    ],
  },
  {
    text: "Comunidad",
    icon: "group",
    prefix: "/es/community/",
    children: [
      {
        text: "Comunidad",
        icon: "group",
        link: "",
        activeMatch: "^/community/$",
      },
      {
        text: "Comunidad de ADempiere ERP",
        children: ["code-of-conduct", "duties-and-rigths"],
      },
    ],
  },
  {
    text: "Descargas",
    icon: "software",
    prefix: "/es/downloads/",
    children: [
      {
        text: "Descargas",
        icon: "software",
        link: "",
        activeMatch: "^/downloads/$",
      },
      {
        text: "Binarios de Aplicaciones",
        children: ["docker", "binary"],
      },
    ],
  },
]);
