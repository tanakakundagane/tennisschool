import Hero from "./componrnts/Hero";
import Programs from "./componrnts/Programs";
import Reasons from "./componrnts/Reasons";
import Plans from "./componrnts/Plans";
import Testimonials from "./componrnts/Testimonials";
import Geen from "./componrnts/Geen";
import Footer from "./componrnts/Footer";

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
