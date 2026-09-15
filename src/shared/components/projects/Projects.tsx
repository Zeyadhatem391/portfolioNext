import { projects } from "@/data/projects";
import AddressSection from "@/shared/components/AddressSection";
import ProjectCard from "@/shared/components/projects/ProjectCard";
import { getTranslations } from "next-intl/server";

export default async function Projects() {
  const t = await getTranslations("projects");
  return (
    <>
      <section
        className="w-full min-h-screen px-6 md:px-28 py-16 "
        id="projects"
      >
        <AddressSection
         titel={t("title")}
        text={t("shortTitle")}
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
