import { getTranslations } from "next-intl/server";

export async function getAbout() {
    const t = await getTranslations("about");

    return [
        {
            id: 1,
            title: t("email.title"),
            desc: "zeyadhatemsabry@gmail.com",
        },
        {
            id: 2,
            title: t("education.title"),
            desc: "Computer Science",
        },
        {
            id: 3,
            title: t("phone.title"),
            desc: "01112079745",
        },
        {
            id: 4,
            title: t("nationality.title"),
            desc:  t("nationality.dec"),
        },
        {
            id: 5,
            title: t("city.title"),
            desc:t("city.dec"),
        },
        {
            id: 6,
            title: t("languages.title"),
            desc: t("languages.dec"),
        },
    ];
}