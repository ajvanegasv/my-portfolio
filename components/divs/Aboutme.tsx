import { Translation } from "../../utils/global/types.ts";

export default function Aboutme({ data }: { data: Translation }) {
  return (
    <div id="aboutme" class="text-pallete-secondary-1 bg-pallete-primary">
      <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">
        About me
      </h1>
      {data.home.aboutme.map((paragraph, index) => (
        <p class="my-3 text-sm" key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
