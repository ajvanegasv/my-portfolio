import { css, theme } from "twind/css";

const writeMachine = css({
  "&::after": { 
    content: "''",
    border: `3px solid #FBF5F3`,
    height: "3px",
    display: "inline-block",
    width: "25px"
  }
})


export { writeMachine };
