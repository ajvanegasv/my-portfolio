import { tw } from "twind";

export default function Footer () { 

  return (
    <footer class={tw`bg-pallete-secondary-4 text-pallete-primary p-3 font-jetBrains`}>
      <div class="flex">
        <div>
          <h1 class="font-semibold text-2xl">Alvaro J Vanegas</h1>
          <h4>Software Development</h4>
        </div>

      </div>
    </footer>
  )
}