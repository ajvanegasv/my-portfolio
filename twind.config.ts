import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      pallete: {
        dark: "#000022",
        light: "#FBF5F3",
        mustard: "#E28413",
        brick: "#DE3C4B",
        coral: "#C42847"
      }
    },
    extend: {
      height: {
        body: "96vh",
        footer: "4vh"
      },
      fontFamily: {
        jetBrains: '"JetBrains Mono"'
      }
    }
  },
  preflight: {
    "@import": "url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap')"
  }
} as Options;
