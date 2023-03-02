import { ComponentChildren } from "preact";
import { tw } from "twind";

export default function AnchorBrick(
  props: {
    href?: string;
    pathpage?: string;
    children: ComponentChildren;
  },
) {
  return (
    <a
      href={props.href}
      class={tw`text-pallete-brick border-b p-1 m-1 flex gap-1 items-center ${
        props.href === "/" + props.pathpage ? "text-pallete-mustard" : null
      }`}
      onClick={() => onclick}
    >
      {props.children}
    </a>
  );
}
