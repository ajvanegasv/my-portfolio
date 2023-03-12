import { tw } from "twind";
import { css } from "twind/css";
import { useSignal } from "@preact/signals";

import { HeaderProps } from "../utils/islands/interfaces/Header.ts";

import BtnLanguage from "./BtnLanguage.tsx";
export default function Header({ lang }: HeaderProps) {
  const checked = useSignal(false);

  return (
    <>
      <header
        class={tw`bg-pallete-secondary-4 sticky ${css`top: 0; z-index: 10;`} text-pallete-primary font-bold `}
      >
        <div class="relative block">
          <div
            class={tw`flex h-12 flex-row items-center justify-between gap-6 px-4`}
          >
            <div class={tw`flex min-h-screen items-center justify-center`}>
              <div
                class={tw`group relative my-2 h-5 w-7 cursor-pointer`}
                onClick={() => checked.value = !checked.value}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class={`absolute transition ${
                    checked.value
                      ? "rotate-90 opacity-0"
                      : "rotate-0 opacity-100"
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
                    checked.value
                      ? "rotate-0 opacity-100"
                      : "-rotate-90 opacity-0"
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
            </div>
            <BtnLanguage lang={lang} />
          </div>
          <div
            class={tw`absolute w-full ${css`background-color: black;`} ${
              checked.value ? "min-h-screen opacity-80" : "min-h-0 opacity-0"
            } transition-all duration-300`}
            onClick={() => checked.value = false}
          >
          </div>
          <div
            class={tw`flex justify-center ${css`top: 3rem;`} flex-col text-center bg-pallete-secondary-4 w-full absolute overflow-hidden ${
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
      </header>
    </>
  );
}
