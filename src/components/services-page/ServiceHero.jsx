"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServiceHero = () => {
  const t = useTranslations();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-[72px] pb-12 md:pt-20 md:pb-16 lg:pt-[100px] lg:pb-20">
      <motion.h1
        ref={titleRef}
        initial={{ x: -100, opacity: 0 }}
        animate={isTitleInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-arsenal font-normal text-4xl text-primary-black text-center uppercase md:text-5xl lg:text-6xl"
      >
        {t("services")}
      </motion.h1>
    </div>
  );
};

export default ServiceHero;

