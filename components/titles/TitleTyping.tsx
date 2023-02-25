import { tw } from "twind";

import { writeMachine } from "../../utils/components/styles/TitleTyping.ts";

export default function TitleTyping(props: { name: string }) {
  return (
    <div>
      <h1 class={tw`text-3xl font-bold ${writeMachine}`}>
        I'm <br /> {props.name}
      </h1>
    </div>
  );
}
