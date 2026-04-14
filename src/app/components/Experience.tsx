import { Briefcase } from "lucide-react";
import { useEffect } from "react";
import { experiences } from "@/data/experience";
import AOS from "aos";
import AddressSection from "@/components/molecules/AddressSection";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease",
    });
  }, []);
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
          {experiences.map((experience, index) => (
            <div className="timeline-line" data-aos="fade-up" key={index}>
              <div className="moving-line" />
              <div
                className={` card w-full p-5 rounded-xl border-2 ds-border-color ds-bg-alt
               duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]
              `}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={48} className="text-blue-600" />
                  <Title size="2xl" className="font-bold">
                    {experience.title}
                  </Title>
                </div>

                <div className="text-green-400 text-xl font-semibold mb-2">
                  {experience.date}
                </div>

                <Text size="lg" className="leading-relaxed">
                  {experience.desc}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
