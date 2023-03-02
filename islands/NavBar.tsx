import { useEffect, useState } from "preact/hooks";
import { tw } from "twind";

/**Components */
import AnchorBrick from "../components/buttons/AnchorBrick.tsx";
import BasicDiv from "../components/divs/BasicDiv.tsx";

/**Utils */
import { optionList } from "../utils/islands/scripts/NavBar.tsx";

export default function NavBar() {
  const [active, setActive] = useState({});
  console.log(globalThis.Location)


  return (
    <BasicDiv class="gap-4">
      {optionList.map((e) => (
        <AnchorBrick
          href={e.href}
        >
          {e.icon} {e.name}
        </AnchorBrick>
      ))}
    </BasicDiv>
  );
}
