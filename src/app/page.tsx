import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Geen from "./components/Geen";
import Footer from "./components/Footer";

export default function Home() {
  return(
    <main>
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Geen/>
      <Footer/>
    </main>
  );
}
