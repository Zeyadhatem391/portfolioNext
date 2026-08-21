import AddressSection from "@/components/molecules/AddressSection";
import { about } from "@/types/about";
import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("about");
  return (
    <>
      <section
        className="w-full min-h-screen px-6 md:px-28 py-16 ds-text-base"
        id="about"
      >
        <AddressSection
          titel={t("title")}
        text={t("shortTitle")}
        />

        <div className="mb-10 ">
          <p className="mb-5 text-3xl font-bold ">
            I&apos;m Zeyad Hatem and
            <span className="text-blue-600"> Web Developer</span>
          </p>

          <p className="text-xl leading-relaxed ">
          {t("dec")}
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {about.map((items) => (
            <div
              key={items.id}
              className="pb-2 border-b-2 border-blue-600 animated-blue-line text-lg "
            >
              <span className="font-bold capitalize">{items.titel} : </span>
              {items.desc}
            </div>
          ))}
        </div>

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
