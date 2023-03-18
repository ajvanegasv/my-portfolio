import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { tw } from "twind";

import { globalStyles } from "../utils/global/styles.ts";
export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <link rel="icon" href={asset("terminal.ico")} />
        <title>Alvaro J Vanegas - Full Stack Dev</title>
        <meta
          name="description"
          content="Alvaro J Vanegas - Software Developer website"
        />
        <meta property="og:url" content="https://ajvanegasv.deno.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alvaro J Vanegas" />
        <meta property="og:description" content="Alvaro J Vanegas Website" />
        <meta property="og:image" content={asset("assets/socialcard.png")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ajvanegasv.deno.dev" />
        <meta property="twitter:url" content="https://ajvanegasv.deno.dev/" />
        <meta name="twitter:title" content="Alvaro J Vanegas" />
        <meta name="twitter:description" content="Alvaro J Vanegas Website" />
        <meta name="twitter:image" content={asset("assets/socialcard.png")} />
      </Head>
      <body id="app" class={tw`bg-pallete-primary ${globalStyles}"`}>
        <Component />
      </body>
    </html>
  );
}
