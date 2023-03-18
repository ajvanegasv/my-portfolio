import { FaLanguage } from "react-icons/fa";

import { BtnLanguageProps } from "../utils/islands/interfaces/BtnLanguage.ts";

export default function BtnLanguage({ lang }: BtnLanguageProps) {
  return (
    <button
      class="gap-2 flex items-center px-0.5  hover:text-pallete-secondary-1 transition-300 font-bold "
      onClick={() => {
        lang === "en"
          ? (document.cookie = "lang=es")
          : (document.cookie = "lang=en");
        location.reload();
      }}
    >
      <FaLanguage />
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
