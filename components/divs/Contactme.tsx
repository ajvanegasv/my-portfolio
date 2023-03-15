import FormContact from "../../islands/FormContact.tsx";

export default function Contactme() {
  return (
    <section id="contactme" class="text-pallete-secondary-1 bg-pallete-primary">
      <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">
        Contact me
      </h1>
      <div class="my-5">
        <FormContact />
      </div>
    </section>
  );
}
