import { Handlers, PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

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
      <main class="h-screen bg-pallete-primary p-5 flex items-center">
        <section>
          <h1 class="text-2xl text-center text-pallete-secondary-1 font-bold mb-4">Working in progress</h1>
          <img class="object-contain h-48 w-96" src={asset("assets/workinprogress.svg")} alt="Working in progress" />
        </section>
      </main>
      <Footer />
    </>
  );
}
