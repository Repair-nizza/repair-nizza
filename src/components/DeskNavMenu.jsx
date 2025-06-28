"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const DeskNavMenu = () => {
  const t = useTranslations();

  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center">
        <li className="py-[14px] px-[26px] border border-primary-black rounded-[32px] h-[52px] flex items-center justify-center  hover:bg-primary-black hover:text-primary-white transition-colors duration-300">
          <Link
            className="font-montserrat font-light text-[19px]"
            href="/portfolio"
          >
            {t("portfolio")}
          </Link>
        </li>
        <li className="py-[14px] px-[26px] border border-primary-black rounded-[32px] h-[52px] flex items-center justify-center hover:bg-primary-black hover:text-primary-white transition-colors duration-300">
          <Link
            className="font-montserrat font-light text-[19px]"
            href="/leave-request"
          >
            {t("request")}
          </Link>
        </li>
        <li className="py-[14px] px-[26px] border border-primary-black rounded-[32px] h-[52px] flex items-center justify-center hover:bg-primary-black hover:text-primary-white transition-colors duration-300">
          <Link
            className="font-montserrat font-light text-[19px]"
            href="/contacts"
          >
            {t("contacts")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DeskNavMenu;
