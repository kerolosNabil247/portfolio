import Image from "next/image";
import HeroSection from "./component/heroSection";
import About from "./component/About";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <Contact></Contact>
    </div>
   
  )
}
