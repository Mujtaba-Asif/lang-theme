import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export const locales = ["en", "fr"];
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  let detectedLocale = locale;

  // If locale is undefined, try to get it from our custom header
  if (!detectedLocale) {
    const headersList = await headers();
    detectedLocale = headersList.get("x-locale");
    console.log("Locale from x-locale header:", detectedLocale);

    // Fallback: try to extract from pathname
    if (!detectedLocale) {
      const pathname = headersList.get("x-pathname") || "";
      console.log("Pathname from headers:", pathname);

      const localeMatch = pathname.match(/\/([a-z]{2})(?:\/|$)/);
      if (localeMatch) {
        detectedLocale = localeMatch[1];
      }
    }
  }

  // Use the detected locale or fall back to default
  const validLocale =
    detectedLocale && locales.includes(detectedLocale)
      ? detectedLocale
      : defaultLocale;

  console.log("i18n - Requested locale:", locale);
  console.log("i18n - Detected locale:", detectedLocale);
  console.log("i18n - Using locale:", validLocale);

  return {
    messages: (await import(`../messages/${validLocale}.json`)).default,
    locale: validLocale,
  };
});
