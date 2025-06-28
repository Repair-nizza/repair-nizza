"use client";

import React from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations, useLocale } from "next-intl";
import Logo from "../../../public/images/SVG/logo-svg.svg";
import motifMob from "../../../public/images/image/project-page/plan-motif-mob.png";
import motifDesk from "../../../public/images/image/project-page/plan-motif-desk.png";
import shadowMob from "../../../public/images/image/project-page/plan-shadow-mob.png";
import shadowDesk from "../../../public/images/image/project-page/plan-shadow-desk.png";
import treeMob from "../../../public/images/image/project-page/plan-tree-mob.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TypeOfRoom = ({ data }) => {
  const t = useTranslations("projectPage");
  const locale = useLocale();

  if (!data) return null;

  const getDescription = () => {
    if (!data.description?.[locale]) return "";

    return data.description[locale]
      .map((block) => block.children.map((child) => child.text).join(""))
      .join(" ");
  };

  // Мобильные рефы
  const mobTitleRef = useRef(null);
  const mobDescRef = useRef(null);
  const mobImgRef = useRef(null);
  const isMobTitleInView = useInView(mobTitleRef, {
    once: true,
    margin: "-100px",
  });
  const isMobDescInView = useInView(mobDescRef, {
    once: true,
    margin: "-100px",
  });
  const isMobImgInView = useInView(mobImgRef, { once: true, margin: "-100px" });
  // Планшетные рефы
  const tabTitleRef = useRef(null);
  const tabDescRef = useRef(null);
  const tabImgRef = useRef(null);
  const isTabTitleInView = useInView(tabTitleRef, {
    once: true,
    margin: "-100px",
  });
  const isTabDescInView = useInView(tabDescRef, {
    once: true,
    margin: "-100px",
  });
  const isTabImgInView = useInView(tabImgRef, { once: true, margin: "-100px" });
  // Десктопные рефы
  const deskTitleRef = useRef(null);
  const deskDescRef = useRef(null);
  const deskLogoRef = useRef(null);
  const deskImgRef = useRef(null);
  const isDeskTitleInView = useInView(deskTitleRef, {
    once: true,
    margin: "-100px",
  });
  const isDeskDescInView = useInView(deskDescRef, {
    once: true,
    margin: "-100px",
  });
  const isDeskLogoInView = useInView(deskLogoRef, {
    once: true,
    margin: "-100px",
  });
  const isDeskImgInView = useInView(deskImgRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <Container className="pb-[94px] lg:pb-[150px] relative z-20">
      <Image
        src={motifMob}
        alt="motif"
        className="absolute top-[320px] right-0 md:hidden -z-10"
      />
      <Image
        src={motifDesk}
        alt="motif"
        className="absolute top-[-130px] left-[-15px] lg:left-[-400px] lg:top-[200px] md:block hidden -z-10"
      />
      <Image
        src={shadowMob}
        alt="motif"
        className="absolute top-[270px] right-0 md:hidden -z-20"
      />
      <Image
        src={shadowDesk}
        alt="motif"
        className="absolute top-[-120px] right-0 md:block lg:top-[280px] lg:right-[600px] hidden -z-10"
      />
      <Image
        src={treeMob}
        alt="motif"
        className="absolute top-[350px] left-0 md:hidden"
        width={150}
        height={150}
      />
      {/* Mobile Version */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-6">
          <div className="mb-[203px] md:mb-0">
            <motion.h2
              ref={mobTitleRef}
              initial={{ y: 60, opacity: 0 }}
              animate={isMobTitleInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-arsenal font-normal text-[32px] uppercase text-primary-black mb-6 leading-[39px]"
            >
              {data.title?.[locale]}
            </motion.h2>
            <motion.p
              ref={mobDescRef}
              initial={{ y: 60, opacity: 0 }}
              animate={isMobDescInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="font-montserrat text-normal text-sm text-primary-black"
            >
              {getDescription()}
            </motion.p>
          </div>
          <div className="relative w-[310px] h-[172px] mx-auto">
            {data.image?.asset?.url && (
              <motion.div
                ref={mobImgRef}
                initial={{ y: 60, opacity: 0 }}
                animate={isMobImgInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={data.image.asset.url}
                  alt={data.title?.[locale]}
                  fill
                  className="object-cover rounded-lg"
                  sizes="310px"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:flex lg:hidden justify-between items-center gap-4">
        <div className="text-center w-[330px]">
          <motion.h2
            ref={tabTitleRef}
            initial={{ y: 60, opacity: 0 }}
            animate={isTabTitleInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-arsenal font-normal text-[32px] text-primary-black mb-6 leading-[39px]"
          >
            {data.title?.[locale]}
          </motion.h2>
          <motion.p
            ref={tabDescRef}
            initial={{ y: 60, opacity: 0 }}
            animate={isTabDescInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-base text-primary-black"
          >
            {getDescription()}
          </motion.p>
        </div>
        <div className="relative w-[310px] h-[200px]">
          {data.image?.asset?.url && (
            <motion.div
              ref={tabImgRef}
              initial={{ y: 60, opacity: 0 }}
              animate={isTabImgInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={data.image.asset.url}
                alt={data.title?.[locale]}
                fill
                className="object-cover rounded-lg"
                sizes="310px"
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex justify-between items-center">
        <div className="mb-auto">
          <motion.h2
            ref={deskTitleRef}
            initial={{ y: 60, opacity: 0 }}
            animate={isDeskTitleInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-arsenal font-normal text-5xl leading-[58px] text-primary-black mb-5"
          >
            {data.title?.[locale]}
          </motion.h2>
          <motion.p
            ref={deskDescRef}
            initial={{ y: 60, opacity: 0 }}
            animate={isDeskDescInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="font-montserrat font-light text-base leading-[19px] text-primary-black w-[491px]"
          >
            {getDescription()}
          </motion.p>
        </div>
        <motion.div
          ref={deskLogoRef}
          initial={{ y: 60, opacity: 0 }}
          animate={isDeskLogoInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="mr-auto mt-auto"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={52}
            height={80}
            className="object-contain"
          />
        </motion.div>
        <div className="relative w-[590px] h-[328px]">
          {data.image?.asset?.url && (
            <motion.div
              ref={deskImgRef}
              initial={{ y: 60, opacity: 0 }}
              animate={isDeskImgInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={data.image.asset.url}
                alt={data.title?.[locale]}
                fill
                className="object-cover rounded-lg"
                sizes="590px"
              />
            </motion.div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default TypeOfRoom;
