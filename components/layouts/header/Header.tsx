import { Head } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";

export default function Header() {
  const defaultTitle = "ajvanegasv - Bienvenidos a mi portafolio web";
  const [title, setTitle] = useState(defaultTitle)

  self.addEventListener("visibilitychange", () => {
    setTitle("¡Regresa por favor! 🙏");
  });

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
