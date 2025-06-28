"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import dropArrow from "../../public/images/SVG/arrow-down.svg";

const localeNames = {
  ru: "RU",
  en: "EN",
  fr: "FR",
};

export default function LocaleSwitcher() {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const locales = routing.locales;
  const currentLocale = useLocale();
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLocaleChange = (newLocale) => {
    const hash = window.location.hash;
    const newPath = `${pathName}${hash}?${searchParams.toString()}`;
    router.replace(newPath, { locale: newLocale });
    setIsOpen(false);
  };

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClickOutside, handleKeyDown]);

  return (
    <div className="relative lg:ml-[60px]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[9px] outline-none text-[#091129]"
      >
        <span className="font-arsenal font-normal text-base">
          {localeNames[currentLocale]}
        </span>
        <Image
          src={dropArrow}
          alt="arrow icon"
          width="12"
          height="12"
          className={`size-3 xl:size-4 ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition duration-300 ease-in-out`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-1 w-[75px] bg-white shadow-md rounded-[8px] z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className="w-full flex items-center justify-center px-4 py-2 hover:bg-gray-50 first:rounded-t-[8px] last:rounded-b-[8px]"
              >
                <span className="font-arsenal font-normal text-base">
                  {localeNames[locale]}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
