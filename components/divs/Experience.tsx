import { Translation } from "../../utils/global/types.ts";

import DescriptionExperience from "../../islands/DescriptionExperience.tsx";

export default function Experience({ data }: { data: Translation }) {
  return (
    <section
      id="experience"
      class="text-pallete-secondary-1 bg-pallete-primary"
    >
      <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">
        Experience
      </h1>
      {data.home.experience.map(({ name, date, career, description }, index) => (
        <div key={index} class="my-5">
          <h3 class="font-bold lg:text-lg">{name}</h3>
          <p class="text-sm lg:text-base text-pallete-secondary-3">{career}</p>
          <p class="text-sm lg:text-base text-pallete-secondary-3">{date}</p>
          <DescriptionExperience description={description} />
        </div>
      ))}
    </section>
  );
}
