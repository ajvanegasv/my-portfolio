import { tw } from "twind";
import { css } from "twind/css";
import { FaRocket } from "react-icons/fa";

import BtnLanguage from "../../islands/BtnLanguage.tsx";
import { HeaderProps } from "../../utils/islands/interfaces/Header.ts";

export default function StaticHeader({ lang }: HeaderProps) {
  return (
    <>
      <header
        class={tw`bg-pallete-secondary-4 sticky ${css`top: 0; z-index: 10;`} text-pallete-primary font-bold`}
      >
        <div
          class={tw`flex h-12 flex-row items-center justify-between gap-6 px-4`}
        >
          <a href="/" class="flex items-center font-bold gap-2 hover:underline hover:text-pallete-secondary-1 transition-300">
            <FaRocket /> Go Home
          </a>
          <BtnLanguage lang={lang} />
        </div>
      </header>
    </>
  );
}
