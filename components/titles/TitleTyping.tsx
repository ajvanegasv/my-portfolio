import { tw } from "twind";
import { flicker } from "../../utils/components/styles/TitleTyping.ts";

export default function TitleTyping(
  props: { name: string; greeting: string; greetingLength: number },
) {
  return (
    <div>
      <h1 class={tw`text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl lg:text-left text-center text-pallete-primary`}>
        {props.greeting}
        {props.greetingLength === props.greeting.length ? <br /> : null}
        {props.name}
        <span class={tw`${flicker}`}>_</span>
      </h1>
    </div>
  );
}
