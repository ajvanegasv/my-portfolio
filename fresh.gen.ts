// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_500.tsx";
import * as $2 from "./routes/_app.tsx";
import * as $3 from "./routes/_middleware.ts";
import * as $4 from "./routes/api/contact.ts";
import * as $5 from "./routes/blog/index.tsx";
import * as $6 from "./routes/index.tsx";
import * as $$0 from "./islands/BtnLanguage.tsx";
import * as $$1 from "./islands/DescriptionExperience.tsx";
import * as $$2 from "./islands/FormContact.tsx";
import * as $$3 from "./islands/Header.tsx";
import * as $$4 from "./islands/MyTitle.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_500.tsx": $1,
    "./routes/_app.tsx": $2,
    "./routes/_middleware.ts": $3,
    "./routes/api/contact.ts": $4,
    "./routes/blog/index.tsx": $5,
    "./routes/index.tsx": $6,
  },
  islands: {
    "./islands/BtnLanguage.tsx": $$0,
    "./islands/DescriptionExperience.tsx": $$1,
    "./islands/FormContact.tsx": $$2,
    "./islands/Header.tsx": $$3,
    "./islands/MyTitle.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
