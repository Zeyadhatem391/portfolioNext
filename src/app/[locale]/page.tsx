import HomeLayout from "@/shared/components/layout/HomeLayout";
import Hero from "../components/Hero";
import About from "../../shared/components/about/About";
import Experience from "../components/Experience";
import Certification from "../../shared/components/certification/Certification";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../../shared/components/contact/Contact";
import CustomCursor from "../../shared/components/CustomCursor";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <About />
      {/* <Experience /> */}
      <Certification />
      <Skills />
      <Projects />
      <Contact />

      <div className="hidden lg:block">
        <CustomCursor />
      </div>
    </HomeLayout>
  );
}
