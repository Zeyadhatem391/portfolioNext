"use client";
import { useState } from "react";
import Link from "next/link";

type Lang = "ar" | "en";

export default function Story() {
  const [lang, setLang] = useState<Lang>("ar");

  const content = {
    ar: {
      title: "رحلتي",
      intro:
        "أنا زياد حاتم، مطوّر ويب من المنصورة. دي مش مجرد قصة تعلم برمجة، دي رحلة بحث عن مستقبل أفضل.",
      stages: [
        {
          year: "2023",
          title: "البداية",
          text: "بعد الثانوية بدأت أدور على كلية ليها مستقبل. كلام البرمجة والـ AI شدّني بسبب فرص الشغل من البيت والسفر.",
        },
        {
          year: "السنة الأولى",
          title: "الاستكشاف",
          text: "سنة صعبة بسبب الإنجليزي والمواد الجديدة، قضيتها بدوّر على المجال المناسب ليا.",
        },
        {
          year: "بداية الويب",
          title: "أول خطوة حقيقية",
          text: "اتعلمت HTML وCSS وJavaScript وبعدها React. أول مرة أحس إني بعمل حاجة حقيقية بإيدي.",
        },
        {
          year: "Backend",
          title: "فهم الصورة الكبيرة",
          text: "اتعلمت PHP وMySQL وبناء API، وهنا فهمت يعني إيه تطبيق متكامل.",
        },
        {
          year: "NTI",
          title: "الاحتكاك الحقيقي",
          text: "تدريب Full Stack Laravel + React، مشاريع أقرب لسوق الشغل.",
        },
        {
          year: "الحاضر",
          title: "مرحلة Next.js",
          text: "Next وTailwind وTypeScript رجّعولي الشغف وخلوني أبني مشاريع أنضف وأسهل.",
        },
      ],
    },

    en: {
      title: "My Journey",
      intro:
        "I’m Zeyad Hatem, a web developer from Mansoura. This is not just a coding story, it’s a journey toward a better future.",
      stages: [
        {
          year: "2023",
          title: "The Beginning",
          text: "After high school I searched for a field with a real future. Programming attracted me because of remote work and opportunities.",
        },
        {
          year: "Web Start",
          title: "First Real Step",
          text: "Learned HTML, CSS, JS then React. Felt for the first time that I can build real things.",
        },
        {
          year: "Backend",
          title: "Big Picture",
          text: "PHP, MySQL and APIs helped me understand full applications.",
        },
        {
          year: "NTI",
          title: "Real Experience",
          text: "Full Stack Laravel & React training closer to the market.",
        },
        {
          year: "Now",
          title: "Next.js Era",
          text: "Next, Tailwind and TypeScript brought my passion back.",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <div
      className="
      min-h-screen
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
      p-6"
    >
      {/* Back Button */}
      <Link
        href="/"
        className="
        fixed top-5 left-5
        bg-blue-600 text-white
        px-4 py-2 rounded-full
        shadow-lg hover:bg-blue-700
        transition"
      >
        ← Back
      </Link>

      {/* Language Switch */}
      <div className="flex justify-end gap-3 mb-6">
        <button
          onClick={() => setLang("ar")}
          className={`px-4 py-2 rounded-full transition border
            ${
              lang === "ar"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 dark:bg-gray-800 border-gray-300"
            }`}
        >
          العربية
        </button>

        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-full transition border
            ${
              lang === "en"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 dark:bg-gray-800 border-gray-300"
            }`}
        >
          English
        </button>
      </div>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-600">
          {t.title}
        </h1>

        <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
          {t.intro}
        </p>

        {/* CV Button */}
        <a
          href="/cv.jpg"
          download
          className="
          inline-block mb-12
          px-6 py-3
          bg-green-600 text-white
          rounded-full shadow
          hover:bg-green-700
          transition"
        >
          Download CV
        </a>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        {t.stages.map((stage, i) => (
          <div key={i} className="flex gap-4 mb-8 group">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full" />

              {i !== t.stages.length - 1 && (
                <div className="w-0.5 h-full bg-blue-300" />
              )}
            </div>

            <div
              className="
              bg-gray-50 dark:bg-gray-800
              text-gray-900 dark:text-gray-100
              p-5 rounded-xl shadow
              w-full border border-gray-200 dark:border-gray-700
              hover:-translate-y-1 transition"
            >
              <span className="text-sm text-blue-600">
                {stage.year}
              </span>

              <h3 className="text-xl font-semibold mt-1">
                {stage.title}
              </h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {stage.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
