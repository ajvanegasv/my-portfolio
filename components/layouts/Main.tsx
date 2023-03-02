import { ComponentChildren } from "preact";

/**Components */
import Header from "./Header.tsx";
import BasicDiv from "../divs/BasicDiv.tsx";

/**Islands */
import NavBar from "../../islands/NavBar.tsx";

export default function Main(props: { children: ComponentChildren }) {
  return (
    <>
      <Header />
      <div class="bg-pallete-dark p-4 h-screen text-pallete-light font-jetBrains">
        <BasicDiv class="justify-center items-center">
          <NavBar />
        </BasicDiv>
        {props.children}
      </div>
    </>
  );
}
