import { tw } from "twind";
import { flicker } from "../../utils/components/styles/TitleTyping.ts";

export default function TitleTyping(
  props: { name: string; greeting: string; greetingLength: number },
) {
  return (
    <div>
      <h1 class={tw`text-3xl font-bold`}>
        {props.greeting}
        {props.greetingLength === props.greeting.length ? <br /> : null}
        {props.name}
        <span class={tw`${flicker}`}>_</span>
      </h1>
    </div>
  );
}
