import { projects } from "@/data/projects";
import AddressSection from "@/components/molecules/AddressSection";
import ProjectCard from "@/components/molecules/ProjectCard";

export default function Projects() {
  return (
    <>
      <section
        className="w-full min-h-screen px-6 md:px-28 py-16 "
        id="projects"
      >
        <AddressSection
          titel="Projects"
          text="Building projects that make an impact"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
