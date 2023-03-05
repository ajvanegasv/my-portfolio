import { tw } from "twind";
import { css } from "twind/css";
import { useSignal } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";

export default function Header() {
  const checked = useSignal(false);

  return (
    <>
      <Head>
        <title>Alvaro J Vanegas - Software Development</title>
        <meta
          name="description"
          content="Alvaro J Vanegas - Software Development website"
        />
      </Head>
      <header
        class={tw`bg-pallete-coral sticky ${css`top: 0; z-index: 10;`} text-pallete-dark font-bold`}
      >
        <div class="p-5 block w-full inline-grid grid-cols-1">
          <div
            class={tw`h-12 w-7 relative`}
            onClick={() => checked.value = !checked.value}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={`absolute transition ${
                checked.value ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0m-16 6l16 0m-16 6l16 0"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={`absolute transition ${
                checked.value ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12m0 -12l12 12"></path>
            </svg>
          </div>
          <div class={tw`relative`}>
            <div
              class={tw`absolute w-full ${css`background-color: black; pointer-events: none;`} ${
                checked.value ? "min-h-screen opacity-80" : "min-h-0 opacity-0"
              } transition-all duration-300`}
            >
            </div>
            <div
              class={tw`flex justify-center ${css`top: 3rem;`} flex-col text-center bg-pallete-coral w-full absolute overflow-hidden ${
                checked.value ? "max-h-64" : "max-h-0"
              } transition-all duration-300`}
            >
              <a href="#aboutme">About me</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/blog">Blog</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
