import { ComponentChildren } from "preact";

export default function BtnBrick(props: { children: ComponentChildren }) {
  return (
    <button class="text-pallete-brick border-2 p-1 m-1 flex gap-1 items-center">
      {props.children}
    </button>
  );
}
