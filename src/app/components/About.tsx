interface AboutProps {
  theme?: "light" | "dark";
}

export default function About({ theme }: AboutProps) {
  const bgPrimary = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";

  return (
    <>
      <section
        className={`w-full min-h-screen px-6 md:px-28 py-16 ${bgPrimary} `}
        id="about"
        
      >
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className={`text-5xl font-bold mb-4 ${textColor}`}>About</h2>
          <p className={`text-lg opacity-70 ${textColor}`}>
            Crafting ideas into real experiences
          </p>
          <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>
        {/* Description */}
        <div className="mb-10">
          <p className={`mb-5 text-3xl font-bold ${textColor}`}>
            I&apos;m Zeyad Hatem and{" "}
            <span className="text-blue-600">Web Developer</span>
          </p>

          <p className={`text-xl leading-relaxed ${textColor}`}>
            In addition to my technical abilities, I bring a strong set of soft
            skills including problem solving, self-learning, teamwork, time
            management, attention to detail, and adaptability — all of which
            help me thrive in both individual and collaborative environments.
          </p>
        </div>

        {/* Info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ${textColor}`}
          >
            <span className="font-bold">Email : </span>
            zeyadhatem151177@gmail.com
          </div>

          <div
            className={`pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ${textColor}`}
          >
            <span className="font-bold">Education : </span>
            Computer Science
          </div>

          <div
            className={`pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ${textColor}`}
          >
            <span className="font-bold">Phone : </span>
            01112079745
          </div>

          <div
            className={`pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ${textColor}`}
          >
            <span className="font-bold">Nationality : </span>
            Egyptian
          </div>

          <div
            className={`pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ${textColor}`}
          >
            <span className="font-bold">City : </span>
            Mansoura
          </div>

          <div
            className={`pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ${textColor}`}
          >
            <span className="font-bold">Languages : </span>
            Arabic, English
          </div>
        </div>

        {/* View CV */}
        <div className="mt-10">
          <a
            href="cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            View CV
          </a>
        </div>
      </section>
    </>
  );
}
