import { FaBars } from "react-icons/fa";

import { MainProps } from "./interfaces.ts";
import Header from "../header/Header.tsx";

export default function Main({ children }: MainProps) {
  return (
    <>
      <Header />
      <div class="bg-pallete-dark p-4 h-screen text-pallete-light">
        <div class="lg:hidden xl:hidden 2xl:hidden">
          <div class="space-y-2">
              <FaBars size={30} />
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
