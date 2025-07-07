import Image from "next/image";
import HeroSection from "./component/heroSection";
import About from "./component/About";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Projects from "./component/Projects";


export const metadata = {
  title:"Portfolio"
}

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
   
  )
}
