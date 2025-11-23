"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import heroImg from "../../../public/images/image/services/hero.png";

const ServiceHero = () => {
  const t = useTranslations();
  const mobileTitleRef = useRef(null);
  const mobileDescriptionRef = useRef(null);
  const desktopTitleRef = useRef(null);
  const desktopDescriptionRef = useRef(null);
  const isMobileTitleInView = useInView(mobileTitleRef, { once: true, margin: "-100px" });
  const isMobileDescriptionInView = useInView(mobileDescriptionRef, { once: true, margin: "-100px" });
  const isDesktopTitleInView = useInView(desktopTitleRef, { once: true, margin: "-100px" });
  const isDesktopDescriptionInView = useInView(desktopDescriptionRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Mobile Version */}
      <div className="relative pt-[34px] mb-14 md:hidden">
        <motion.h1
          ref={mobileTitleRef}
          initial={{ x: -100, opacity: 0 }}
          animate={isMobileTitleInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-arsenal text-[32px] leading-[125%] uppercase mb-4"
        >
          {t("servicesPage.title")}
        </motion.h1>
        <motion.p
          ref={mobileDescriptionRef}
          initial={{ y: 20, opacity: 0 }}
          animate={isMobileDescriptionInView ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="font-montserrat font-light text-sm"
        >
          {t("servicesPage.description")}
        </motion.p>
      </div>

      {/* Desktop Version - Styled as Service Card */}
      <div className="relative hidden md:block">
        <div className="flex items-end mt-[15px] mb-[100px]">
          <div className="relative w-[845px] h-[643px] -ml-10">
            <Image
              src={heroImg}
              alt={t("servicesPage.title")}
              fill
              className="rounded-[20px] object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-end pl-14">
            <motion.h1
              ref={desktopTitleRef}
              initial={{ x: -100, opacity: 0 }}
              animate={isDesktopTitleInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-arsenal text-[84px] leading-[125%] uppercase mb-5"
            >
              {t("servicesPage.title")}
            </motion.h1>
            <motion.p
              ref={desktopDescriptionRef}
              initial={{ y: 20, opacity: 0 }}
              animate={isDesktopDescriptionInView ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="font-montserrat font-light text-[16px] leading-[125%]"
            >
              {t("servicesPage.description")}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHero;

