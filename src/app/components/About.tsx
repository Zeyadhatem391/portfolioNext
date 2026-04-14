import AddressSection from "@/components/molecules/AddressSection";

export default function About() {
 
  return (
    <>
      <section
        className="w-full min-h-screen px-6 md:px-28 py-16 ds-text-base"
        id="about"
      >
        {/* Title */}
        <AddressSection
          titel="About"
          text="Crafting ideas into real experiences"
        />

        {/* Description */}
        <div className="mb-10 ">
          <p className="mb-5 text-3xl font-bold ">
            I&apos;m Zeyad Hatem and{" "}
            <span className="text-blue-600">Web Developer</span>
          </p>

          <p className="text-xl leading-relaxed ">
            Beyond my technical expertise, I bring strong soft skills including
            problem-solving, self-learning, teamwork, time management, attention
            to detail, and adaptability. These abilities enable me to excel in
            both independent and collaborative environments — and to
            consistently deliver high-quality results.
          </p>
        </div>

        {/* Info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ">
            <span className="font-bold">Email : </span>
            zeyadhatem151177@gmail.com
          </div>

          <div className="pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ">
            <span className="font-bold">Education : </span>
            Computer Science
          </div>

          <div className="pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ">
            <span className="font-bold">Phone : </span>
            01112079745
          </div>

          <div className="pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ">
            <span className="font-bold">Nationality : </span>
            Egyptian
          </div>

          <div className="pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ">
            <span className="font-bold">City : </span>
            Mansoura
          </div>

          <div className="pb-2 border-b-2 border-blue-600 animated-blue-line text-lg ">
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
