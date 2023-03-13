import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      pallete: {
        primary: "#000022",
        "secondary-1": "#FBF5F3",
        "secondary-2": "#E28413",
        "secondary-3": "#DE3C4B",
        "secondary-4": "#C42847"
      },
      gray: "#808080"
    },
    extend: {
      fontFamily: {
        jetBrains: '"JetBrains Mono"'
      }
    }
  },
  preflight: {
    "@font-face": [
      {
        fontFamily: "JetBrains Mono",
        fontWeight: "normal",
        src: 'url(/fonts/JetBrainsMono-Regular.woff2) format("woff2")'
      },
      {
        fontFamily: "JetBrains Mono",
        fontWeight: "bold",
        src: 'url(/fonts/JetBrainsMono-Bold.woff2) format("woff2")'
      }
    ]
  }
} as Options;
