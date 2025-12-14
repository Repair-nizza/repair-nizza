"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ClockIcon from "../icons/ClockIcon";

const BlogDetailHero = ({ data }) => {
  const locale = useLocale();
  const t = useTranslations("blogPage");

  const mobileBlurRef = useRef(null);
  const desktopBlurRef = useRef(null);
  const isMobileBlurInView = useInView(mobileBlurRef, {
    once: true,
    margin: "-100px",
  });
  const isDesktopBlurInView = useInView(desktopBlurRef, {
    once: true,
    margin: "-100px",
  });

  if (!data?.mainImage?.asset?.url) {
    return null;
  }

  const formatDate = dateString => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(
      locale === "ru" ? "ru-RU" : locale === "fr" ? "fr-FR" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  return (
    <div className="relative w-full">
      {/* Mobile Image with Blur Card */}
      <div className="md:hidden relative w-full">
        <div className="w-full">
          <Image
            src={data.mainImage.asset.url}
            alt={data.title?.[locale] || "Blog image"}
            width={310}
            height={660}
            className="w-full h-[660px] object-cover rounded-t-[28px]"
            priority
          />
        </div>
        <motion.div
          ref={mobileBlurRef}
          initial={{ y: 100, opacity: 0 }}
          animate={isMobileBlurInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 w-full py-8 px-6 h-auto backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isMobileBlurInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-arsenal font-normal text-4xl text-primary-white mb-5 leading-[43px] uppercase text-center"
          >
            {data.title?.[locale]}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isMobileBlurInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-montserrat font-light text-base text-primary-white text-center w-[282px] mx-auto leading-5 mb-4"
          >
            {data.subtitle?.[locale]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMobileBlurInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-primary-white"
          >
            {data.date && (
              <p className="font-montserrat font-light text-sm opacity-80">
                {formatDate(data.date)}
              </p>
            )}
            {data.readTime && (
              <div className="flex items-center gap-2">
                <ClockIcon className="w-[16px] h-[16px] text-primary-white" />
                <p className="font-montserrat font-light text-sm">
                  {data.readTime} {t("minRead")}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block relative">
        <Image
          src={data.mainImage.asset.url}
          alt={data.title?.[locale] || "Blog image"}
          width={1440}
          height={453}
          className="w-full h-[453px] object-cover rounded-t-[20px]"
          priority
        />
        <motion.div
          ref={desktopBlurRef}
          initial={{ x: -100, opacity: 0 }}
          animate={isDesktopBlurInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-1/2 lg:w-[679px] h-full backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-[60px] pl-10 pr-[45px]"
        >
          <div className="flex flex-col justify-center mx-auto">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isDesktopBlurInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-arsenal font-normal text-4xl lg:text-[83px] text-primary-white mb-6 lg:leading-[100px] uppercase mx-auto"
            >
              {data.title?.[locale]}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isDesktopBlurInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-montserrat font-light text-base text-primary-white md:w-[290px] lg:w-[404px] leading-[19px] mb-4"
            >
              {data.subtitle?.[locale]}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isDesktopBlurInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col items-start gap-2 text-primary-white"
            >
              {data.date && (
                <p className="font-montserrat font-light text-sm opacity-80">
                  {formatDate(data.date)}
                </p>
              )}
              {data.readTime && (
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-[16px] h-[16px] text-primary-white" />
                  <p className="font-montserrat font-light text-sm">
                    {data.readTime} {t("minRead")}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailHero;
