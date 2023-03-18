import { FaUserAlt, FaHome, FaStar, FaTelegramPlane, FaSuitcase, FaGitAlt , FaGraduationCap, FaPenAlt} from "react-icons/fa"

export default function HeaderOptions() {
  return (
    <>
      <a
        class="flex items-center gap-2 hover:text-pallete-secondary-1 transition-300"
        href="#aboutme"
      >
        <FaUserAlt /> About me
      </a>
      <a
        class="flex items-center gap-2 hover:text-pallete-secondary-1 transition-300"
        href="#education"
      >
        <FaGraduationCap /> Education
      </a>
      <a
        class="flex items-center gap-2 hover:text-pallete-secondary-1 transition-300"
        href="#skills"
      >
        <FaStar /> Skills
      </a>
      <a
        class="flex items-center gap-2 hover:text-pallete-secondary-1 transition-300"
        href="#experience"
      >
        <FaSuitcase /> Experience
      </a>
      <a
        class="flex items-center gap-2 hover:text-pallete-secondary-1 transition-300"
        href="#projects"
      >
        <FaGitAlt /> Projects
      </a>
      <a
        class="flex items-center gap-2 hover:text-pallete-secondary-1 transition-300"
        href="#contactme"
      >
        <FaTelegramPlane /> Contact Me
      </a>
      <div class="border-b-2 my-0.5 xl:border-b-0 xl:my-0 xl:border-l-2 xl:h-5"></div>
      <a
        class="flex items-center gap-2 hover:text-pallete-secondary-1 transition-300"
        href="/"
      >
        <FaHome /> Home
      </a>
      <a
        class="flex items-center gap-2 hover:text-pallete-secondary-1 transition-300 mb-2 xl:mb-0"
        href="/blog"
      >
        <FaPenAlt /> Blog
      </a>
    </>
  );
}
