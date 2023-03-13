import { signal } from "@preact/signals";

import { Translation } from "./types.ts";

export const T = signal<Translation | null>(null);
