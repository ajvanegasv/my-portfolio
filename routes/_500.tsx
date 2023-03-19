import { asset } from "$fresh/runtime.ts";
import { css } from "twind/css";
import { tw } from "twind";

import Footer from "../components/layouts/Footer.tsx";
import StaticHeader from "../components/layouts/StaticHeader.tsx";

export default function Error500Page() {
  return (
    <>
      <StaticHeader />
      <main class="h-screen bg-pallete-primary p-5 flex items-center">
        <section class="flex justify-center items-center flex-col gap-9 w-full">
          <h1 class="text-3xl sm:text-6xl text-center text-pallete-secondary-1 font-bold mb-4">
          Oops! This is unexpected.
          </h1>
          <img
            class={tw`object-contain h-48 w-96 sm:h-60 sm:${css`width: 28rem;`} md:h-80 md:${css`width:32rem;`} lg:h-96 lg:${css`width: 36rem;`} 2xl:${css`height: 28rem; width: 40rem;`}  3xl:${css`height: 32rem; width: 44rem;`}`}
            src={asset("assets/error500.svg")}
            alt="Working in progress"
          />
          <h1 class="text-3xl sm:text-6xl text-center text-pallete-secondary-1 font-bold mb-4">
          500 Internal Server Error
          </h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
