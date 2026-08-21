import { experiences } from "@/data/experience";
import AddressSection from "@/components/molecules/AddressSection";
import ExperienceCard from "@/components/molecules/ExperienceCard";
import { getTranslations } from "next-intl/server";

export default async function Experience() {
  const t = await getTranslations("experience");
 
  return (
    <>
      <section
        className="w-full min-h-screen px-6 md:px-28 py-16 "
        id="experience"
      >
        <AddressSection
          titel={t("title")}
        text={t("shortTitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </section>
    </>
  );
}
