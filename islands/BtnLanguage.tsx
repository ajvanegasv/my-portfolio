import { FaLanguage } from "react-icons/fa";

import { BtnLanguageProps } from "../utils/islands/interfaces/BtnLanguage.ts";

export default function BtnLanguage({ lang }: BtnLanguageProps) {
  return (
    <button
      class="gap-1 flex items-center border-2 px-0.5 rounded hover:text-pallete-secondary-1 transition-300 font-bold "
      onClick={() => {
        lang === "en"
          ? (document.cookie = "lang=es")
          : (document.cookie = "lang=en");
        location.reload();
      }}
    >
      <FaLanguage />
      {lang === "es" ? "en" : "es"}
    </button>
  );
}
