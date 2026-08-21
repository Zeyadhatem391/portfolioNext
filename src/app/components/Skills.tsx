import AddressSection from "@/components/molecules/AddressSection";
import { skillsData } from "@/data/skills";
import SkillsCard from "@/components/molecules/SkillsCard";
import { getTranslations } from "next-intl/server";

export default async function Skills() {
  const t = await getTranslations("skills");
  return (
    <section className="w-full min-h-screen px-6 md:px-28 py-16 " id="skills">
      <AddressSection  titel={t("title")}
        text={t("shortTitle")} />

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {skillsData.map((category, index) => (
          <SkillsCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
}
