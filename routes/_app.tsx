import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <title>Alvaro J Vanegas - Full Stack Dev</title>
        <meta
          name="description"
          content="Alvaro J Vanegas - Software Development website"
        />
      </Head>
      <body class="font-jetBrains bg-pallete-primary">
        <Component />
      </body>
    </html>
  );
}
