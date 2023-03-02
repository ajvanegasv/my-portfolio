
import { FaFolder, FaHome } from "react-icons/fa";

import { option } from "../interfaces/NavBar.ts";

const optionList: option[] = [
  { href: "/", name: "Home", icon: <FaHome /> },
  { href: "/projects", name: "Projects", icon: <FaFolder /> },
];



export { optionList };
