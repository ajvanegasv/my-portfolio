import { Head } from "$fresh/runtime.ts";

export default function Header() {
  const defaultTitle = "ajvanegasv - Bienvenidos";

  return (
    <Head>
      <title>{defaultTitle}</title>
    </Head>
  );
}
