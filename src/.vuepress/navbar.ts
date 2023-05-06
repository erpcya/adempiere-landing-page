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
        children: [
          "2023-01-01-adempiere-394",
        ],
      },
      {
        text: "History",
        children: [
          "the-beginning",
        ],
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
        children: [
          "technology",
          "business-process",
          "benefits",
          "source-code",
        ],
      },
    ],
  },
  {
    text: "Documentation",
    icon: "creative",
    prefix: "/docs/component",
    children: [
      { text: "Docs", link: "", icon: "note", activeMatch: "^/docs/$" },
      {
        text: "Component",
        children: [
          "/",
        ],
      },
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
  }
]);

export const esNavbarConfig = navbar([
  "/es/",
  {
    text: "Nosotros",
    icon: "profile",
    prefix: "/about/",
    children: [
      { text: "Nosotros", icon: "software", link: "", activeMatch: "^/about/$" },
      {
        text: "Noticias",
        prefix: "news/",
        children: [
          "2023-01-01-adempiere-394",
        ],
      },
      {
        text: "Historia",
        children: [
          "the-beginning",
        ],
      },
    ],
  },
  {
    text: "Producto",
    icon: "engine",
    prefix: "/product/",
    children: [
      { text: "Producto", icon: "engine", link: "", activeMatch: "^/product/$" },
      {
        text: "Tecnología",
        children: [
          "technology",
          "business-process",
          "benefits",
          "source-code",
        ],
      },
    ],
  },
  {
    text: "Documentación",
    icon: "creative",
    prefix: "/docs/",
    children: [
      { text: "ADempiere Estándar", link: "", icon: "note", activeMatch: "^/docs/$" },
      {
        text: "Component",
        children: [
          "/",
        ],
      }
    ],
  },
  {
    text: "Comunidad",
    icon: "group",
    prefix: "/community/",
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
    prefix: "/downloads/",
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
  }
]);
