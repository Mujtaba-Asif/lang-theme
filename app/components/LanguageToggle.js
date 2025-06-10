"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const isEnglish = locale === "en";

  const toggleLanguage = () => {
    const newLocale = isEnglish ? "fr" : "en";

    console.log("Current locale:", locale);
    console.log("Current pathname:", pathname);
    console.log("New locale:", newLocale);

    startTransition(() => {
      const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "") || "/";
      const newPath = `/${newLocale}${pathWithoutLocale}`;

      console.log("Path without locale:", pathWithoutLocale);
      console.log("New path:", newPath);

      router.push(newPath);
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="relative w-14 h-7 bg-gradient-to-r from-green-400 to-teal-500 dark:from-green-600 dark:to-teal-800 rounded-full p-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-teal-800 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50"
      aria-label="Toggle language"
    >
      <div
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out shadow-md ${
          !isEnglish ? "transform translate-x-7" : ""
        }`}
      >
        <Languages className="w-3 h-3 text-gray-700" />
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium text-white">
        <span
          className={`transition-opacity duration-200 ${
            isEnglish ? "opacity-100" : "opacity-50"
          }`}
        >
          EN
        </span>
        <span
          className={`transition-opacity duration-200 ${
            !isEnglish ? "opacity-100" : "opacity-50"
          }`}
        >
          FR
        </span>
      </div>
    </button>
  );
}
