import { MiddlewareHandlerContext } from "$fresh/server.ts";

import { State } from "../utils/global/interfaces.ts";
import es from "../utils/language/es.json" assert { type: "json" };
import en from "../utils/language/en.json" assert { type: "json" };

const handler = async (req: Request, ctx: MiddlewareHandlerContext<State>) => {
  let setLangCookie = true;

  if (
    req.headers.has("cookie") &&
    req.headers.get("cookie")!.includes("lang")
  ) {
    ctx.state.lang = req.headers.get("cookie")!.includes("lang=es")
      ? "es"
      : "en";
    setLangCookie = false;
  } else if (req.headers.get("accept-language")?.includes("es")) {
    ctx.state.lang = "es";
  }else { 
    ctx.state.lang = "en";
  }

  ctx.state.t = ctx.state.lang === "es" ? es : en;

  const res = await ctx.next();

  if(setLangCookie) res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);

  return res;
};

export { handler };
