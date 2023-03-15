import { Translation } from "../../utils/global/types.ts";

export default function Education({ data }: { data: Translation }) {
  return (
    <section id="education" class="text-pallete-secondary-1 bg-pallete-primary">
      <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">
        Education
      </h1>
      {data.home.education.map(({ name, date, career }, index) => (
        <div key={index} class="my-3">
          <h3 class="font-bold">{name}</h3>
          <p class="text-sm text-pallete-secondary-3">{career}</p>
          <p class="text-sm text-pallete-secondary-3">{date}</p>
        </div>
      ))}
    </section>
  );
}
