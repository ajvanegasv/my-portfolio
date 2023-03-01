import { tw } from "twind"

export default function BtnMailBox(){  
  return (
    <a type="button" title="Contact me">
      <img class={tw`object-scale-down h-10 w-10`} src="/assets/Mailbox.png" alt="Mailbox"/>
    </a>
  );
}