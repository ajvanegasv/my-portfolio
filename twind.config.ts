import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      pallete: {
        primary: "#0D0D0D",
        "secondary-1": "#F2F2F2",
        "secondary-2": "#5DA676",
        "secondary-3": "#BFBFBF",
        "secondary-4": "#0583F2"
      },
      gray: "#BFBFBF"
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
