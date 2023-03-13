import { asset } from "$fresh/runtime.ts";

export default function Skills() {
  return (
    <div id="skills">
      <h1 class="text-xl border-b mb-2 text-pallete-secondary-4">Skills</h1>
      <div class="my-3 flex justify-start flex-wrap gap-2">
        <img class="h-10 w-10" src={asset("php.svg")} alt="php" />
        <img
          class="h-10 w-10"
          src={asset("codeigniter.svg")}
          alt="codeigniter"
        />
        <img
          src={asset("laravel.svg")}
          alt="laravel"
          class="h-10 w-10"
        />
        <img
          src={asset("javascript.svg")}
          alt="javascript"
          class="h-10 w-10"
        />
        <img
          src={asset("typescript.svg")}
          alt="typescript"
          class="h-10 w-10"
        />
        <img
          src={asset("jquery.svg")}
          alt="jquery"
          class="h-10 w-10"
        />
        <img
          src={asset("node.svg")}
          alt="nodejs"
          class="h-10 w-10"
        />
        <img
          src={asset("vuejs.svg")}
          alt="vuejs"
          class="h-10 w-10"
        />
        <img src={asset("react.svg")} alt="react" class="h-10 w-10" />
        <img src={asset("preact.svg")} alt="preact" class="h-10 w-10" />
        <img src={asset("logo.svg")} alt="fresh" class="h-10 w-10" />
        <img src={asset("deno.svg")} alt="deno" class="h-10 w-10" />
        <img
          src={asset("nestjs.svg ")}
          alt="nestjs"
          class="h-10 w-10"
        />
        <img
          src={asset("nextjs.svg")}
          alt="nextjs"
          class="h-10 w-10"
        />
        <img
          src={asset("mysql.svg")}
          alt="mysql"
          class="h-10 w-10"
        />
        <img
          src={asset("postgresql.svg")}
          alt="postgres"
          class="h-10 w-10"
        />
        <img src={asset("docker.svg")} alt="docker" class="h-10 w-10" />
      </div>
    </div>
  );
}
