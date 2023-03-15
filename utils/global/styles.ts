import { css, theme } from "twind/css";

const font = theme("fontFamily.jetBrains");

const globalStyles = css({
  ":global": {
    "*": {
      fontFamily: font,
      scrollBehavior: "smooth"
    }
  },
});

export { globalStyles };
