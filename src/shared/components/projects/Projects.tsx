"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import AddressSection from "@/shared/components/AddressSection";
import ProjectCard from "@/shared/components/projects/ProjectCard";
import { useTranslations } from "next-intl";
import { RippleButton } from "@/components/ui/ripple-button";

export default function Projects() {
  const t = useTranslations("projects");

  const [visibleCount, setVisibleCount] = useState(2);

  const isShowingAll = visibleCount >= projects.length;

  const visibleProjects = projects.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, projects.length));
  };

  return (
    <section className="w-full min-h-screen px-6 md:px-28 py-16" id="projects">
      <AddressSection titel={t("title")} text={t("shortTitle")} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {projects.length > 2 && !isShowingAll && (
        <div className="flex justify-center mt-10">
          <RippleButton
            onClick={handleViewMore}
            className="h-10 cursor-pointer px-3 text-sm font-semibold sm:h-10 sm:px-5 sm:text-md bg-primary text-primary-foreground hover:bg-primary/80"
          >
            {t("btnMore")}
          </RippleButton>
        </div>
      )}

      {isShowingAll && (
        <div className="flex justify-center mt-10">
          <RippleButton className="h-10 cursor-pointer px-3 text-sm font-semibold sm:h-10 sm:px-5 sm:text-md bg-primary text-primary-foreground hover:bg-primary/80">
            {t("btn")}
          </RippleButton>
        </div>
      )}
    </section>
  );
}
