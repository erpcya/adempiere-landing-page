import { defineUserConfig } from "@vuepress/cli";
import docsearchPlugin from "@vuepress/plugin-docsearch";
import theme from "./theme";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  // alias: {
  //   "@Button": path.resolve(__dirname, "components/Button.vue"),
  // },
  dest: "dist",

  head: [
    ["meta", { name: "baidu-site-verification", content: "4H7tszevS8" }],
    ["meta", { name: "baidu-site-verification", content: "nGf5yi0Gec" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "",
      description: "A official page of ADempiere community.",
    },
    "/es/": {
      title: "",
      lang: "es-ES",
      description: "Página oficial de la comunidad de ADempiere",
    },
  },

  theme,

  plugins: [
    docsearchPlugin({
      appId: "LDBQGQC8Q9",
      apiKey: "5c3a7145aeba231c3b85b742d24fc24f",
      indexName: "adempiere",
      locales: {
        "/": {
          placeholder: "English",
          translations: {
            button: {
              buttonText: "Search",
              buttonAriaLabel: "Search",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "Clear Conditions",
                resetButtonAriaLabel: "Clear Conditions",
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "Cancel",
              },
              startScreen: {
                recentSearchesTitle: "History",
                noRecentSearchesText: "No History",
                saveRecentSearchButtonTitle: "Save to History",
                removeRecentSearchButtonTitle: "Remove from History",
                favoriteSearchesTitle: "Favorites",
                removeFavoriteSearchButtonTitle: "Remove from Favorites",
              },
              errorScreen: {
                titleText: "Can't get results",
                helpText: "You may need to check your internet connection",
              },
              footer: {
                selectText: "Choose",
                navigateText: "Toggle",
                closeText: "Close",
                searchByText: "Search",
              },
              noResultsScreen: {
                noResultsText: "No result found",
                suggestedQueryText: "You can try query",
                reportMissingResultsText:
                  "Do you think this query should have results？",
                reportMissingResultsLinkText: "Click for Feedback",
              },
            },
          },
        },
        "/es/": {
          placeholder: "Español",
          translations: {
            button: {
              buttonText: "Buscar",
              buttonAriaLabel: "Buscar",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "Limpiar Búsqueda",
                resetButtonAriaLabel: "Limpiar Condiciones",
                cancelButtonText: "Cancelar",
                cancelButtonAriaLabel: "Cancelar",
              },
              startScreen: {
                recentSearchesTitle: "Historial",
                noRecentSearchesText: "No existen historias",
                saveRecentSearchButtonTitle: "Guardar en Historias",
                removeRecentSearchButtonTitle: "Eliminar de Historias",
                favoriteSearchesTitle: "Favoritos",
                removeFavoriteSearchButtonTitle: "Eliminar de Favoritos",
              },
              errorScreen: {
                titleText: "No se pueden obtener resultados",
                helpText: "Debería verificar su conexión a internet",
              },
              footer: {
                selectText: "Seleccionar",
                navigateText: "Palanca",
                closeText: "Cerrar",
                searchByText: "Buscar",
              },
              noResultsScreen: {
                noResultsText: "No se encontraron resultados",
                suggestedQueryText: "Intente nuevamente",
                reportMissingResultsText:
                  "Cree que la búsqueda debería devolver resultados?",
                reportMissingResultsLinkText: "Haga Click para Responder",
              },
            },
          },
        },
      },
    }),
  ],

  shouldPrefetch: false,
});
