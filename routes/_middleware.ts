import { MiddlewareHandlerContext } from "$fresh/server.ts";

import { State } from "../utils/global/interfaces.ts";
import es from "../utils/language/es.json" assert { type: "json"};

const handler = async (_req: Request, ctx: MiddlewareHandlerContext<State>) => {
  //TODO: upgrade handler for more lang

  ctx.state.lang = "es";
  ctx.state.t = es;

  const res = await ctx.next();

  return res;
};

export { handler };
