import { Handlers, PageProps } from "$fresh/server.ts";

import Footer from "../../components/layouts/Footer.tsx";
import { Data } from "../../utils/global/types.ts";
import { State } from "../../utils/global/interfaces.ts";
import StaticHeader from "../../components/layouts/StaticHeader.tsx";

export const handler: Handlers<Data, State> = {
  GET(_req, ctx) {
    return ctx.render({
      lang: ctx.state.lang,
      t: ctx.state.t,
    });
  },
};

export default function Blog(props: PageProps<Data>) {
  return (
    <>
      <StaticHeader lang={props.data.lang} />
      <main class="h-screen bg-pallete-primary">
      </main>
      <Footer />
    </>
  );
}
