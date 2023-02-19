import { MainProps } from "./interfaces.ts";
import Header from "../header/Header.tsx";

export default function Main({ children }: MainProps) {
  return (
    <>
      <Header />
      <div class="bg-pallete-dark p-4 h-screen text-pallete-light">
        <div class="pb-3">
          <div class="space-y-2">
            <span class="block w-8 h-0.5 bg-pallete-light"></span>
            <span class="block w-8 h-0.5 bg-pallete-light"></span>
            <span class="block w-5 h-0.5 bg-pallete-light"></span>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
