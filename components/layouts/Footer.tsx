import { tw } from "twind";

export default function Footer () { 

  return (
    <footer class={tw`bg-pallete-coral text-pallete-dark p-3`}>
      <div class="flex">
        <div>
          <h1 class="font-semibold text-2xl">Alvaro J Vanegas</h1>
          <h4>Software Development</h4>
        </div>

      </div>
    </footer>
  )
}