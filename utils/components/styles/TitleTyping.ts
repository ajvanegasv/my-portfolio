import { animation } from "twind/css";

const flicker = animation('0.8s ease infinite', {
  "0%": {
    opacity: "1.0"
  },
  "50%": {
    opacity: "0.0",
  },
  "100%": {
    opacity: "1.0"
  }

});

export { flicker };
