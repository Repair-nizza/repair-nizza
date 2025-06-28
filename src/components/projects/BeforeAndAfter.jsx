"use client";

import React from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";
import mobileIcon from "../../../public/images/SVG/before-after-mob.svg";
import desktopIcon from "../../../public/images/SVG/before-after-desk.svg";
import motifMob from "../../../public/images/image/project-page/ba-motif-mob.png";
import motifDesk from "../../../public/images/image/project-page/ba-motif-desk.png";
import shadowMob from "../../../public/images/image/project-page/ba-shadow-mob.png";
import shadowDesk from "../../../public/images/image/project-page/ba-shadow-desk.png";
import treeDesk from "../../../public/images/image/project-page/plan-tree-desk.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BeforeAndAfter = ({ data }) => {
  const t = useTranslations("projectPage");

  if (!data) return null;

  // Мобильные рефы
  const beforeMobRef = useRef(null);
  const afterMobRef = useRef(null);
  const iconMobRef = useRef(null);
  const isBeforeMobInView = useInView(beforeMobRef, {
    once: true,
    margin: "-100px",
  });
  const isAfterMobInView = useInView(afterMobRef, {
    once: true,
    margin: "-100px",
  });
  const isIconMobInView = useInView(iconMobRef, {
    once: true,
    margin: "-100px",
  });
  // Планшетные рефы
  const beforeTabRef = useRef(null);
  const afterTabRef = useRef(null);
  const iconTabRef = useRef(null);
  const isBeforeTabInView = useInView(beforeTabRef, {
    once: true,
    margin: "-100px",
  });
  const isAfterTabInView = useInView(afterTabRef, {
    once: true,
    margin: "-100px",
  });
  const isIconTabInView = useInView(iconTabRef, {
    once: true,
    margin: "-100px",
  });
  // Десктопные рефы
  const beforeDeskRef = useRef(null);
  const afterDeskRef = useRef(null);
  const iconDeskRef = useRef(null);
  const isBeforeDeskInView = useInView(beforeDeskRef, {
    once: true,
    margin: "-100px",
  });
  const isAfterDeskInView = useInView(afterDeskRef, {
    once: true,
    margin: "-100px",
  });
  const isIconDeskInView = useInView(iconDeskRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="relative">
      <Image
        src={treeDesk}
        alt="motif"
        className="absolute bottom-[-140px] right-0 hidden lg:block"
        width={210}
        height={210}
      />
      <Container className="pt-[136px] pb-[94px] lg:py-[150px] relative z-10">
        <Image
          src={motifMob}
          alt="motif"
          className="absolute top-[40px] right-0 md:hidden -z-10"
        />
        <Image
          src={motifDesk}
          alt="motif"
          className="absolute top-0 right-[50px] lg:right-[255px] md:block hidden -z-10"
        />
        <Image
          src={shadowMob}
          alt="motif"
          className="absolute top-[-40px] right-0 md:hidden -z-10"
        />
        <Image
          src={shadowDesk}
          alt="motif"
          className="absolute top-[40px] lg:top-[-10px] right-0 md:block hidden -z-10"
        />
        <div className="flex flex-col gap-3 md:gap-6 lg:gap-5">
          {/* Mobile Version */}
          <div className="block md:hidden">
            <h2 className="font-arsenal font-normal text-[22px] text-primary-black mb-10 text-center">
              {t("beforeAfter.title")}
            </h2>
            <div className="flex flex-col gap-3 relative">
              <div className="relative w-[310px] h-[355px]">
                <motion.div
                  ref={beforeMobRef}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isBeforeMobInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  {data.before?.asset?.url && (
                    <Image
                      src={data.before.asset.url}
                      alt={t("beforeAfter.before")}
                      fill
                      className="object-cover rounded-lg"
                      sizes="310px"
                    />
                  )}
                </motion.div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  ref={iconMobRef}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isBeforeMobInView && isAfterMobInView
                      ? { opacity: 1, scale: 1 }
                      : {}
                  }
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image src={mobileIcon} alt="" width={64} height={64} />
                </motion.div>
              </div>
              <div className="relative w-[310px] h-[355px]">
                <motion.div
                  ref={afterMobRef}
                  initial={{ x: 100, opacity: 0 }}
                  animate={isAfterMobInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  {data.after?.asset?.url && (
                    <Image
                      src={data.after.asset.url}
                      alt={t("beforeAfter.after")}
                      fill
                      className="object-cover rounded-lg"
                      sizes="310px"
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Tablet Version */}
          <div className="hidden md:flex lg:hidden justify-center gap-4 relative">
            <div className="flex flex-col items-center">
              <h3 className="font-arsenal text-2xl text-primary-black mb-6">
                {t("beforeAfter.before")}
              </h3>
              <div className="relative w-[310px] h-[355px]">
                <motion.div
                  ref={beforeTabRef}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isBeforeTabInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  {data.before?.asset?.url && (
                    <Image
                      src={data.before.asset.url}
                      alt={t("beforeAfter.before")}
                      fill
                      className="object-cover rounded-lg"
                      sizes="310px"
                    />
                  )}
                </motion.div>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                ref={iconTabRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isBeforeTabInView && isAfterTabInView
                    ? { opacity: 1, scale: 1 }
                    : {}
                }
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                <Image src={desktopIcon} alt="" width={60} height={60} />
              </motion.div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-arsenal text-2xl text-primary-black mb-6">
                {t("beforeAfter.after")}
              </h3>
              <div className="relative w-[310px] h-[355px]">
                <motion.div
                  ref={afterTabRef}
                  initial={{ x: 100, opacity: 0 }}
                  animate={isAfterTabInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  {data.after?.asset?.url && (
                    <Image
                      src={data.after.asset.url}
                      alt={t("beforeAfter.after")}
                      fill
                      className="object-cover rounded-lg"
                      sizes="310px"
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Desktop Version */}
          <div className="hidden lg:flex justify-center gap-5 relative">
            <div className="flex flex-col items-center">
              <h3 className="font-arsenal text-3xl text-primary-black mb-[10px]">
                {t("beforeAfter.before")}
              </h3>
              <div className="relative w-[590px] h-[618px]">
                <motion.div
                  ref={beforeDeskRef}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isBeforeDeskInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  {data.before?.asset?.url && (
                    <Image
                      src={data.before.asset.url}
                      alt={t("beforeAfter.before")}
                      fill
                      className="object-cover rounded-lg"
                      sizes="590px"
                    />
                  )}
                </motion.div>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                ref={iconDeskRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isBeforeDeskInView && isAfterDeskInView
                    ? { opacity: 1, scale: 1 }
                    : {}
                }
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                <Image src={desktopIcon} alt="" width={72} height={72} />
              </motion.div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-arsenal text-3xl text-primary-black mb-[10px]">
                {t("beforeAfter.after")}
              </h3>
              <div className="relative w-[590px] h-[618px]">
                <motion.div
                  ref={afterDeskRef}
                  initial={{ x: 100, opacity: 0 }}
                  animate={isAfterDeskInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  {data.after?.asset?.url && (
                    <Image
                      src={data.after.asset.url}
                      alt={t("beforeAfter.after")}
                      fill
                      className="object-cover rounded-lg"
                      sizes="590px"
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BeforeAndAfter;
