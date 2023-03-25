import { Translation } from "../../utils/global/types.ts";

import { asset } from "$fresh/runtime.ts";

export default function Skills({ data }: { data: Translation }) {
  return (
    <section id="skills">
      <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">Skills</h1>
      <div class="my-6">
        <div class="my-3">
          <h3 class="text-center font-bold lg:text-lg text-pallete-secondary-1 mb-5">
            {data.home.skills.soft.title}
          </h3>
          <div class="flex justify-around gap-3 flex-wrap">
            {data.home.skills.soft.habilitys.map(({ name, img }) => (
              <div class="flex flex-col gap-2 items-center m-3">
                <img
                  class="h-10 w-10 rounded"
                  src={asset(img)}
                  alt={name}
                  title={name}
                />
                <p class="text-sm lg:text-base text-pallete-secondary-3">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div class="my-3">
          <h3 class="text-center font-bold lg:text-lg text-pallete-secondary-1 mb-5">
            {data.home.skills.hard.title}
          </h3>
          <div class="py-3">
            {data.home.skills.hard.abilities.map(({ section, content }) => (
              <div class="my-3">
                <p class="text-sm lg:text-base text-pallete-secondary-3">
                  {section}
                </p>
                <div class="flex justify-start flex-wrap gap-5 mt-4">
                  {content.map(({ name, img }) => (
                    <img
                      class="h-10 w-10"
                      src={asset(img)}
                      alt={name}
                      title={name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
