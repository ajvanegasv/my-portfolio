import { Translation } from "../../utils/global/types.ts";
import { FaGithub, FaLink } from "react-icons/fa";

import { iconList } from "../../utils/components/helper/IconsHelper.ts";

export default function Projects({ data }: { data: Translation }) {
  return (
    <section id="projects" class="text-pallete-secondary-1 bg-pallete-primary">
      <h1 className="text-xl border-b mb-2 text-pallete-secondary-4">
        Projects
      </h1>
      {data.home.projects.map(
        ({ name, status, description, tecnology, repo, url }, index) => {
          const icons = tecnology.map((name: string) => {
            const icon = iconList[name as keyof typeof iconList];
            return { Icon: icon, name };
          });

          return (
            <div class="my-5" key={index}>
              <div class="flex gap-3 items-center">
                <h3 class="font-bold lg:text-lg">{name}</h3>
                {repo
                  ? (
                    <a
                      target="_blank"
                      href={repo}
                      class="text-pallete-secondary-1 gap-1 border-2 hover:bg-pallete-secondary-2 transition-300 rounded-full bg-pallete-primary p-2"
                      title="repository"
                    >
                      <FaGithub />
                    </a>
                  )
                  : null}
                  {url
                  ? (
                    <a
                      target="_blank"
                      href={url}
                      class="text-pallete-secondary-1 gap-1 border-2 hover:bg-pallete-secondary-4 transition-300 rounded-full bg-pallete-primary p-2"
                      title="link"
                    >
                      <FaLink />
                    </a>
                  )
                  : null}
              </div>
              <p class="text-sm lg:text-base text-pallete-secondary-3">
                {description}
              </p>
              <p class="text-sm lg:text-base text-pallete-secondary-3">
                Status: {status}
              </p>
              <div class="flex gap-2">
                {icons.map(({ Icon, name }) => {
                  return <Icon title={name} />;
                })}
              </div>
            </div>
          );
        },
      )}
    </section>
  );
}
