import Main from "../components/layouts/Main.tsx";

import MyTitle from "../islands/MyTitle.tsx";

export default function Home() {
  return (
    <Main>
      <div class="pt-3">
        <MyTitle name="Alvaro Vanegas" greetingType="I'am" />
      </div>
    </Main>
  );
}
