import { Translation } from "../../utils/global/types.ts";
import { FaGithub } from "react-icons/fa";

import { iconList } from "../../utils/components/helper/IconsHelper.ts";

export default function Projects({ data }: { data: Translation }) {
  return (
    <div id="projects" class="text-pallete-secondary-1 bg-pallete-primary">
      <h1 className="text-xl border-b mb-2 text-pallete-secondary-4">
        Projects
      </h1>
      {data.home.projects.map(
        ({ name, status, description, tecnology, repo }, index) => {
          const icons = tecnology.map((name: string) => {
            const icon = iconList[name as keyof typeof iconList];
            return {Icon: icon, name};
          });

          return (
            <div class="my-5" key={index}>
              <h3 class="font-bold">{name}</h3>
              <p class="text-sm text-pallete-secondary-3">{description}</p>
              <p class="text-sm text-pallete-secondary-3">Status: {status}</p>
              {repo
                ? (
                  <a
                    target="_blank"
                    href={repo}
                    class="text-sm text-pallete-secondary-3 gap-2 flex items-center"
                  >
                    <FaGithub />
                    <p class="hover:border-b">Repository</p>
                  </a>
                )
                : null}
              <div class="text-lg flex gap-2">
                {icons.map(({Icon, name}) => {
                  return <Icon title={name} />;
                })}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}
