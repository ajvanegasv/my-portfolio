import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default function Header() {
  const defaultTitle = "ajvanegasv - Bienvenidos a mi portafolio web";

    console.log(window)


  return (
    <Head>
      <title>{defaultTitle}</title>
    </Head>
  );
}
