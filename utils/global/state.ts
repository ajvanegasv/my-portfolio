import { signal } from "@preact/signals";

import { Translation } from "./types.ts";

const T = signal<Translation | null>(null);

export { T };
