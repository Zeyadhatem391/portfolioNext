import HomeLayout from "@/shared/components/layout/HomeLayout";
import Hero from "../../shared/components/hero/Hero";
import About from "../../shared/components/about/About";
import Certification from "../../shared/components/certification/Certification";
import Skills from "../../shared/components/skills/Skills";
import Projects from "../../shared/components/projects/Projects";
import Contact from "../../shared/components/contact/Contact";
import CustomCursor from "../../shared/components/CustomCursor";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <About />
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
