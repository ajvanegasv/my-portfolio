import { Handlers, PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import { tw } from "twind";

import MyTitle from "../islands/MyTitle.tsx";
import Header from "../islands/Header.tsx";
import Footer from "../components/layouts/Footer.tsx";
import { State } from "../utils/global/interfaces.ts";
import { Data } from "../utils/global/types.ts";
import Aboutme from "../components/divs/Aboutme.tsx";
import Education from "../components/divs/Education.tsx";
import Skills from "../components/divs/Skills.tsx";
import Experience from "../components/divs/Experience.tsx";
import Projects from "../components/divs/Projects.tsx";
import Contactme from "../components/divs/Contactme.tsx";

import { pmd, psm, plg, pxl, p2xl, homeStyle, img2xl } from "../utils/components/styles/Home.ts";

export const handler: Handlers<Data, State> = {
  GET(_req, ctx) {
    return ctx.render({
      lang: ctx.state.lang,
      t: ctx.state.t,
    });
  },
};

export default function Home(props: PageProps<Data>) {
  return (
    <>
      <Header lang={props.data.lang} />
      <div class={tw`bg-pallete-secondary-4  flex flex-col-reverse gap-9 justify-center items-center lg:flex-row lg:justify-between lg:px-28 2xl:${psm} 3xl:${plg} ${homeStyle}`}>
        <MyTitle name="Alvaro Vanegas" greetingType="Hi, I'm" />
        <img src={asset("assets/AlvaroJVanegas.png")} class={tw`object-cover object-bottom rounded-full h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 2xl:${img2xl}`} alt="Alvaro J Vanegas" />
      </div>
      <main class={tw`bg-pallete-primary p-5 font-bold sm:${psm} md:${pmd} lg:${plg} xl:${pxl} 2xl:${p2xl}`}>
        <Aboutme data={props.data.t} />
        <Education data={props.data.t} />
        <Skills data={props.data.t} />
        <Experience data={props.data.t} />
        <Projects data={props.data.t} />
        <Contactme />
      </main>
      <Footer />
    </>
  );
}
