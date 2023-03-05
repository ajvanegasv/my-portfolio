
import MyTitle from "../islands/MyTitle.tsx";
import Header from "../islands/Header.tsx";
import Footer from "../components/layouts/Footer.tsx";

export default function Home() {
  return (
    <>
      <Header />
        <div class="pt-3 bg-pallete-coral h-screen flex justify-center text-center text-pallete-dark items-center">
          <MyTitle name="Alvaro Vanegas" greetingType="Hi, I'm" />
        </div>
      <Footer />
    </>
  );
}
