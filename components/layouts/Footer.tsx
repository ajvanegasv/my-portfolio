import { tw } from "twind";
import { FaCopyright, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class={tw`bg-pallete-secondary-4 text-pallete-primary p-3 `}>
      <div class="flex">
        <div>
          <h1 class="font-semibold text-2xl">Alvaro J Vanegas</h1>
          <h4>Full Stack Development</h4>
          <div class="flex flex-wrap gap-2 text-xl">
            <a target="_blank" href="https://github.com/ajvanegasv">
              <FaGithub />
            </a>
            <a target="_blank" href="https://www.instagram.com/ajvanegasv/">
              <FaInstagram />
            </a>
            <a target="_blank" href="https://twitter.com/ajvanegasv">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-start text-sm items-center gap-2 my-3">
        <h4>
          All rights reserved
        </h4>
        <FaCopyright />
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
