import { tw } from "twind";

import { flicker } from "../../utils/components/styles/TitleTyping.ts";

export default function TitleTyping(props: { name: string }) {
  return (
    <div>
      <h1 class={tw`text-3xl font-bold`}>
        I'm <br /> {props.name}
        <span class={tw`${flicker}`}>_</span>
      </h1>
    </div>
  );
}
