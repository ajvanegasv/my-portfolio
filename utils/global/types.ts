
import translation from "../language/es.json" assert { type: "json"};
import { State } from "./interfaces.ts";

type Translation = typeof translation;

type Data = {
  lang: State["lang"],
  t: Translation
};

export type { Translation, Data }