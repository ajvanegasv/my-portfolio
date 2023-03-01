import { ComponentChildren } from "preact";
import { FaFolder, FaHome } from "react-icons/fa";

import Header from "./Header.tsx";
import BasicDiv from "../divs/BasicDiv.tsx";
import BtnBrick from "../buttons/BtnBrick.tsx";
import BtnMailBox from "../buttons/BtnMailBox.tsx";

export default function Main(props: { children: ComponentChildren }) {
  return (
    <>
      <Header />
      <div class="bg-pallete-dark p-4 h-screen text-pallete-light font-jetBrains">
        <BasicDiv class="justify-between items-center">
          <BasicDiv>
            <a href="/">
              <BtnBrick>
                <FaHome /> Home
              </BtnBrick>
            </a>
            <a href="/projects">
              <BtnBrick>
                <FaFolder /> Projects
              </BtnBrick>
            </a>
          </BasicDiv>
          <BtnMailBox />
        </BasicDiv>
        {props.children}
      </div>
    </>
  );
}
