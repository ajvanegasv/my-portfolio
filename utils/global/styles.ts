import { css, theme } from "twind/css";

const font = theme("fontFamily.JetBrains");

const globalStyles = css({
  ":global": {
    "*": {
      fontFamily: font
    }
  },
});

export { globalStyles };
