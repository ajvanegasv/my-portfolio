import MyTitle from "../islands/MyTitle.tsx";
import Header from "../islands/Header.tsx";
import Footer from "../components/layouts/Footer.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <div class="pt-3 bg-pallete-secondary-4 h-screen flex justify-center text-center text-pallete-primary items-center font-jetBrains">
        <MyTitle name="Alvaro Vanegas" greetingType="Hi, I'm" />
      </div>
      <main class="bg-pallete-primary font-jetBrains p-5 font-bold">
        <div id="aboutme" class="text-pallete-secondary-1 bg-pallete-primary">
          <h1 class="text-xl border-b">About me</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
