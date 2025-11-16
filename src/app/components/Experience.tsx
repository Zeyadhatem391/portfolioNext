import { Briefcase } from "lucide-react";

interface ExperienceProps {
  theme?: "light" | "dark";
}

export default function Experience({ theme }: ExperienceProps) {
  const bgPrimary = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-600";

  return (
    <>
      <section
        className={`w-full min-h-screen px-6 md:px-28 py-16 ${bgPrimary}`}
      >
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className={`text-5xl font-bold mb-4 ${textColor}`}>Experience</h2>
          <p className={`text-lg opacity-70 ${textColor}`}>
            Let&apos;s build something great together
          </p>
          <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        {/* Cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CARD 1 */}
          <div className="timeline-line">
            <div className="moving-line" />
            <div
              className={` card w-full p-5 rounded-xl border-2 ${borderColor} ${cardBg}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={28} className="text-blue-600" />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  National Telecommunications Institute (NTI)
                </h3>
              </div>

              <div className="text-green-400 text-xl font-semibold mb-2">
                31/8/25 - 30/9/25
              </div>

              <p className={`text-lg leading-relaxed ${textColor}`}>
                I bring strong technical skills supported by teamwork,
                communication, and adaptability.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="timeline-line">
            <div className="moving-line" />

            <div
              className={`card w-full p-5 rounded-xl border-2 ${borderColor} ${cardBg}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={28} className="text-blue-600" />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  Frontend Developer – Freelance
                </h3>
              </div>

              <div className="text-green-400 text-xl font-semibold mb-2">
                2023 - Present
              </div>

              <p className={`text-lg leading-relaxed ${textColor}`}>
                Building modern, responsive, and interactive websites using
                React, Tailwind and clean component architecture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
