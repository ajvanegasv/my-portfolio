import { Head, asset } from "$fresh/runtime.ts";
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
          content="Alvaro J Vanegas - Software Development website"
        />
      </Head>
      <body id="app" class={tw`bg-pallete-primary ${globalStyles}"`}>
        <Component />
      </body>
    </html>
  );
}
