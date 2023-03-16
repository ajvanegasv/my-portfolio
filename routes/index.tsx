import { Handlers, PageProps } from "$fresh/server.ts";

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
      <div class="pt-3 bg-pallete-secondary-4 h-screen flex justify-center text-center text-pallete-primary items-center ">
        <MyTitle name="Alvaro Vanegas" greetingType="Hi, I'm" />
      </div>
      <main class="bg-pallete-primary p-5 font-bold lg:px-32 xl:px-44 2xl:px-52">
        <Aboutme data={props.data.t} />
        <Education data={props.data.t} />
        <Skills />
        <Experience data={props.data.t} />
        <Projects data={props.data.t} />
        <Contactme />
      </main>
      <Footer />
    </>
  );
}
