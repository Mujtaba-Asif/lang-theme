"use client";

import { useTranslations } from "next-intl";
import { ThemeToggle } from "../components/ThemeToggle";
import { LanguageToggle } from "../components/LanguageToggle";
import {
  Sparkles,
  Globe,
  Palette,
  Smartphone,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function Home() {
  const t = useTranslations("HomePage");
  const tNav = useTranslations("Navigation");

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      </div>

      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Globe className="w-8 h-8 text-white " />
          <h1 className="text-2xl font-bold text-white">Demo App</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-white">
          <a
            href="#home"
            className="hover:text-purple-200 transition-colors duration-200"
          >
            {tNav("home")}
          </a>
          <a
            href="#about"
            className="hover:text-purple-200 transition-colors duration-200"
          >
            {tNav("about")}
          </a>
          <a
            href="#contact"
            className="hover:text-purple-200 transition-colors duration-200"
          >
            {tNav("contact")}
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </header>

      <main className="relative py-20 z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 ">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-4">
              {t("subtitle")}
            </p>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t("features.multilingual")}
              </h3>
              <p className="text-purple-200">
                {t("features.multilingualDesc")}
              </p>
            </div>

            <div className="glass rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t("features.theming")}
              </h3>
              <p className="text-purple-200">{t("features.themingDesc")}</p>
            </div>

            <div className="glass rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t("features.responsive")}
              </h3>
              <p className="text-purple-200">{t("features.responsiveDesc")}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>{t("buttons.getStarted")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className="group glass text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>{t("buttons.learnMore")}</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="relative z-10 p-6 text-center text-purple-200">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span>{t("footer.madeWith")}</span>
        </div>
        <p className="text-sm opacity-75">
          © 2024 LangTheme. {t("footer.allRights")}
        </p>
      </footer>
    </div>
  );
}
