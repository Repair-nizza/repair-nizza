"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import heroImg from "../../../public/images/image/blog-page/heroMob.jpg";
import heroDesktop from "../../../public/images/image/blog-page/heroDesk.jpg";
import Container from "../Container";

const BlogHero = () => {
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

  return (
    <div className="relative w-full">
      {/* Mobile Section */}
      <div className="md:hidden relative w-full">
        <div className="w-full">
          <Image
            src={heroImg}
            alt={t("title")}
            width={310}
            height={660}
            className="w-full h-[521px] object-cover rounded-t-[28px]"
            priority
          />
        </div>
        <motion.div
          ref={mobileBlurRef}
          initial={{ y: 100, opacity: 0 }}
          animate={isMobileBlurInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 w-full py-10 px-6 backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isMobileBlurInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-arsenal font-normal text-[36px] text-primary-white mb-5 leading-[120%] uppercase"
          >
            {t("title")}
          </motion.h3>
          {t("description") && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isMobileBlurInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-montserrat font-light text-[14px] text-primary-white max-w-[482px] leading-[120%]"
            >
              {t("description")}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Desktop Section */}
      <div className="hidden md:block relative w-full">
        <Image
          src={heroDesktop}
          alt={t("title")}
          width={1440}
          height={453}
          className="w-full h-[473px] object-cover"
          priority
        />  
        <motion.div
          ref={desktopBlurRef}
          initial={{ x: -100, opacity: 0 }}
          animate={isDesktopBlurInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]"
        >
          <Container className="flex items-center justify-between w-full px-[46px] py-10">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isDesktopBlurInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-arsenal font-normal text-[83px] text-primary-white lg:leading-[100px] uppercase"
            >
              {t("title")}
            </motion.h3>
            {t("description") && (
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isDesktopBlurInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-montserrat font-light text-base text-primary-white md:w-[290px] lg:w-[404px] leading-[19px]"
              >
                {t("description")}
              </motion.p>
            )}
          </Container>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogHero;
