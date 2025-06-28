"use client";

import { useTranslations } from "next-intl";
import { Field } from "formik";
import bgImgMob from "../../../public/images/image/leave-request-img/leave-bg-mob.webp";
import bgImgDesk from "../../../public/images/image/leave-request-img/leave-bg-desk.webp";
import logo from "../../../public/images/image/leave-request-img/logo-white.png";
import Container from "../Container";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SoloInput = () => {
  const t = useTranslations("leaveRequest");

  // Desktop refs
  const desktopTitleRef = useRef(null);
  const desktopInputRef = useRef(null);
  const logoRef = useRef(null);

  // Mobile refs
  const mobileTitleRef = useRef(null);
  const mobileInputRef = useRef(null);

  // Desktop view states
  const isDesktopTitleInView = useInView(desktopTitleRef, {
    once: true,
    margin: "-100px",
  });
  const isDesktopInputInView = useInView(desktopInputRef, {
    once: true,
    margin: "-100px",
  });
  const isLogoInView = useInView(logoRef, { once: true, margin: "-100px" });

  // Mobile view states
  const isMobileTitleInView = useInView(mobileTitleRef, {
    once: true,
    margin: "-100px",
  });
  const isMobileInputInView = useInView(mobileInputRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImgMob.src})` }}
        className="flex flex-col gap-4 py-[113px] bg-cover bg-center lg:hidden"
      >
        <div className="pt-9 pb-11 backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]">
          <Container>
            <div className="flex flex-col gap-9 md:flex-row md:items-center">
              <motion.h2
                ref={mobileTitleRef}
                initial={{ x: -100, opacity: 0 }}
                animate={
                  isMobileTitleInView
                    ? { x: 0, opacity: 1 }
                    : { x: -100, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-arsenal text-[28px] font-normal text-primary-white uppercase leading-[34px]"
              >
                {t("notFoundOption")}
              </motion.h2>
              <motion.div
                ref={mobileInputRef}
                initial={{ x: 100, opacity: 0 }}
                animate={
                  isMobileInputInView
                    ? { x: 0, opacity: 1 }
                    : { x: 100, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Field
                  as="textarea"
                  name="customDescription"
                  className="w-[310px] h-[149px] py-3 px-[14px] text-primary-white border border-primary-white bg-transparent rounded-lg resize-none placeholder:font-montserrat placeholder:font-normal placeholder:text-primary-white placeholder:text-sm placeholder:opacity-70 placeholder:leading-6"
                  placeholder={t("describeRepair")}
                />
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgImgDesk.src})` }}
        className="py-9 bg-cover bg-center hidden lg:block"
      >
        <div className="py-8 backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]">
          <Container>
            <div className="flex justify-between items-center">
              <motion.h2
                ref={desktopTitleRef}
                initial={{ x: -100, opacity: 0 }}
                animate={
                  isDesktopTitleInView
                    ? { x: 0, opacity: 1 }
                    : { x: -100, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-arsenal text-[28px] font-normal text-primary-white uppercase leading-[34px] lg:text-[36px] lg:leading-[44px] lg:w-[336px]"
              >
                {t("notFoundOption")}
              </motion.h2>
              <motion.div
                ref={logoRef}
                initial={{ opacity: 0 }}
                animate={isLogoInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                <Image src={logo} alt="logo" />
              </motion.div>
              <motion.div
                ref={desktopInputRef}
                initial={{ x: 100, opacity: 0 }}
                animate={
                  isDesktopInputInView
                    ? { x: 0, opacity: 1 }
                    : { x: 100, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Field
                  as="textarea"
                  name="customDescription"
                  className="w-[310px] h-[149px] py-3 px-[14px] text-primary-white border border-primary-white bg-transparent rounded-lg resize-none lg:w-[571px] lg:h-[84px] placeholder:font-montserrat placeholder:font-normal placeholder:text-primary-white placeholder:text-sm placeholder:opacity-70 placeholder:leading-6"
                  placeholder={t("describeRepair")}
                />
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default SoloInput;
