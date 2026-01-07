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
        id="experience"
      >
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className={`text-5xl font-bold mb-4 ${textColor}`}>Experience</h2>
          <p className={`text-lg opacity-70 ${textColor}`}>
            Turning challenges into achievements
          </p>
          <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        {/* Cards  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* CARD 1 */}
          <div className="timeline-line">
            <div className="moving-line" />
            <div
              className={` card w-full p-5 rounded-xl border-2 ${borderColor} ${cardBg}
               duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]
              `}
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={28} className="text-blue-600" />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  National Telecommunications Institute (NTI)
                </h3>
              </div>

              <div className="text-green-400 text-xl font-semibold mb-2">
                31/8/25 - 25/9/25
              </div>

              <p className={`text-lg leading-relaxed ${textColor}`}>
                Pleted 120 hours of intensive Full Stack Web Development
                training, focusing on frontend and Laravel for backend. Gained
                practical experience in building and deploying full-stack
                applications, covering both frontend design and backend API
                development with database integration.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="timeline-line">
            <div className="moving-line" />

            <div
              className={`card w-full p-5 rounded-xl border-2 ${borderColor} ${cardBg}
              duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]
            `}
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={28} className="text-blue-600" />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  Intern at digital training center in Mansura university
                </h3>
              </div>

              <div className="text-green-400 text-xl font-semibold mb-2">
                06/8/24 - 24/11/24
              </div>

              <p className={`text-lg leading-relaxed ${textColor}`}>
                Built full web applications using HTML, CSS, JavaScript, and
                React.js, gaining hands-on experience with APIs, databases, and
                Git, and completed 120 hours of training in full stack
                development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
