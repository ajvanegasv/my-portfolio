import { Handlers, PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import { css } from "twind/css";
import { tw } from "twind";

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

//TODO: Terminar el blog

export default function Blog(props: PageProps<Data>) {
  return (
    <>
      <StaticHeader lang={props.data.lang} />
      <main class="h-screen bg-pallete-primary p-5 flex items-center">
        <section class="flex justify-center items-center flex-col gap-9 w-full">
          <h1 class="text-3xl sm:text-6xl text-center text-pallete-secondary-1 font-bold mb-4">
            I need a blog, I know it
          </h1>
          <img
            class={tw`object-contain h-48 w-96 sm:h-60 sm:${css`width: 28rem;`} md:h-80 md:${css`width:32rem;`} lg:h-96 lg:${css`width: 36rem;`} 2xl:${css`height: 28rem; width: 40rem;`}  3xl:${css`height: 32rem; width: 44rem;`}`}
            src={asset("assets/workinprogress.svg")}
            alt="Working in progress"
          />
        </section>        
      </main>
      <Footer />
    </>
  );
}
