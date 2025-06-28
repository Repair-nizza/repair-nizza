"use client";
import { useTranslations } from "next-intl";

const LinkWithUsBtn = ({ onClick }) => {
  const t = useTranslations();
  return (
    <button
      onClick={onClick}
      className="hidden lg:block bg-primary-black text-primary-white w-[262px] h-[52px] rounded-[32px] font-montserrat font-normal text-sm hover:bg-primary-white hover:text-primary-black transition-colors duration-300 hover:border hover:border-primary-black"
    >
      {t("linkWithUs")}
    </button>
  );
};

export default LinkWithUsBtn;
