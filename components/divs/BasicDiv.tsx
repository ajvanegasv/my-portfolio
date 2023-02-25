import { ComponentChildren } from "preact";

export default function BasicDiv(
  props: { children: ComponentChildren; class?: string },
) {
  return (
    <div class={`flex ${props.class ?? null}`}>
      {props.children}
    </div>
  );
}
