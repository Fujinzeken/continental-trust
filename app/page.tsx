import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Coverage from "./components/coverage";
import Approach from "./components/approach";
import WhoWeCover from "./components/who-we-cover";
import CompanyInformation from "./components/company-information";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Coverage />
      <Approach />
      <WhoWeCover />
      <CompanyInformation />
      <Contact />
    </main>
  );
}
