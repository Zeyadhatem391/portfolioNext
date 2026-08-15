import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;

    const validLocale =
        routing.locales.find((l) => l === locale) ?? routing.defaultLocale;

    return {
        locale: validLocale,
        messages: (await import(`../messages/${validLocale}.json`)).default,
    };
});