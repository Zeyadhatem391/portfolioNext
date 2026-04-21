import { experiences } from "@/data/experience";
import AddressSection from "@/components/molecules/AddressSection";
import ExperienceCard from "@/components/molecules/ExperienceCard";

export default function Experience() {
 
  return (
    <>
      <section
        className="w-full min-h-screen px-6 md:px-28 py-16 "
        id="experience"
      >
        {/* Title */}
        <AddressSection
          titel="Experience"
          text="Turning challenges into achievements"
        />

        {/* Cards  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </section>
    </>
  );
}
