import { Handlers, PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

import MyTitle from "../islands/MyTitle.tsx";
import Header from "../islands/Header.tsx";
import Footer from "../components/layouts/Footer.tsx";
import { State } from "../utils/global/interfaces.ts";
import { Data } from "../utils/global/types.ts";

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
      <main class="bg-pallete-primary p-5 font-bold">
        <div id="aboutme" class="text-pallete-secondary-1 bg-pallete-primary">
          <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">
            About me
          </h1>
          {props.data.t.home.aboutme.map((paragraph, index) => (
            <p class="my-3" key={index}>{paragraph}</p>
          ))}
        </div>
        <div id="education" class="text-pallete-secondary-1 bg-pallete-primary">
          <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">
            Education
          </h1>
          {props.data.t.home.education.map(({ name, date, career }, index) => (
            <div key={index} class="my-3">
              <h3 class="font-bold">{name}</h3>
              <p class="text-sm text-gray">{career}</p>
              <p class="text-sm text-gray">{date}</p>
            </div>
          ))}
        </div>
        <div id="skills">
          <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">Skills</h1>
          <div class="my-3 flex justify-start flex-wrap gap-2">
            <img class="h-10 w-10" src={asset("php.svg")} alt="php" />
            <img
              class="h-10 w-10"
              src={asset("codeigniter-plain.svg")}
              alt="codeigniter"
            />
            <img
              src={asset("laravel.svg")}
              alt="laravel"
              class="h-10 w-10"
            />
            <img
              src={asset("javascript-js.svg")}
              alt="javascript"
              class="h-10 w-10"
            />
            <img
              src={asset("typescript-icon.svg")}
              alt="typescript"
              class="h-10 w-10"
            />
            <img
              src={asset("jquery-original-wordmark.svg")}
              alt="jquery"
              class="h-10 w-10"
            />
            <img
              src={asset("node-js.svg")}
              alt="nodejs"
              class="h-10 w-10"
            />
            <img
              src={asset("vuejs-original.svg")}
              alt="vuejs"
              class="h-10 w-10"
            />
            <img src={asset("react.svg")} alt="react" class="h-10 w-10" />
            <img src={asset("preact.svg")} alt="preact" class="h-10 w-10" />
            <img src={asset("logo.svg")} alt="fresh" class="h-10 w-10" />
            <img src={asset("icons8-deno.svg")} alt="deno" class="h-10 w-10" />
            <img
              src={asset("icons8-nestjs.svg ")}
              alt="nestjs"
              class="h-10 w-10"
            />
            <img
              src={asset("icons8-next.js.svg")}
              alt="nextjs"
              class="h-10 w-10"
            />
            <img
              src={asset("icons8-mysql-logo.svg")}
              alt="mysql"
              class="h-10 w-10"
            />
            <img
              src={asset("icons8-postgresql.svg")}
              alt="postgres"
              class="h-10 w-10"
            />
          </div>
        </div>
        <div
          id="experience"
          class="text-pallete-secondary-1 bg-pallete-primary"
        >
          <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">
            Experience
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
