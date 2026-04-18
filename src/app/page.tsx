import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Certification from "./components/Certification";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import WorkFlow from "./components/WorkFlow";
import HomeLayout from "@/components/layout/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <About />
      <Experience />
      <Certification />
      <Skills />
      <Projects />
      <WorkFlow />
      <Contact />

      <div className="hidden lg:block">
        <CustomCursor />
      </div>
    </HomeLayout>
  );
}
