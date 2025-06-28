"use client";

import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";
import step1Mob from "../../../public/images/image/step-1-mob.webp";
import step2Mob from "../../../public/images/image/step-2-mob.webp";
import step3Mob from "../../../public/images/image/step-1-desk.webp";
import step4Mob from "../../../public/images/image/step-2-desk.webp";
import motifMob from "../../../public/images/image/step-motif-mob.png";
import motifDesk from "../../../public/images/image/step-motif-desk.png";
import motifShadowMob from "../../../public/images/image/service-bg-shadow.png";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const StepToDream = () => {
  const t = useTranslations("stepToDream");
  const router = useRouter();
  const locale = useLocale();
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const desktopButtonRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });
  const isButtonInView = useInView(buttonRef, { once: true });
  const isDesktopButtonInView = useInView(desktopButtonRef, { once: true });

  const handleConsultationClick = () => {
    router.push(`/${locale}/leave-request`);
  };

  return (
    <div className="relative">
      <Image
        src={step1Mob}
        alt="path of three"
        className="absolute top-0 right-0 -z-10 lg:hidden"
        width={120}
        height={120}
      />
      <Image
        src={step3Mob}
        alt="path of three"
        className="hidden absolute top-0 left-[400px] -z-10 lg:block"
        width={280}
        height={280}
      />
      <Container className="relative overflow-hidden">
        <Image
          src={motifMob}
          alt="path of three"
          className="absolute top-[70px] md:top-[200px] right-0 -z-20 lg:hidden"
        />
        <Image
          src={motifDesk}
          alt="path of three"
          className="absolute top-[104px] left-0 -z-20 lg:block hidden"
        />
        <Image
          src={motifShadowMob}
          alt="path of three"
          className="absolute top-[-230px] md:top-[-135px] right-0 -z-20 lg:top-0 lg:left-0"
        />
        <Image
          src={motifShadowMob}
          alt="path of three"
          className="absolute hidden lg:block -z-20 lg:top-[-200px] lg:left-[380px]"
        />
        <div className="pt-[94px] pb-[98px] lg:flex lg:justify-between lg:pt-[164px] lg:pb-[230px]">
          <div>
            <motion.h2
              ref={titleRef}
              initial={{ x: -100, opacity: 0 }}
              animate={
                isTitleInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-arsenal font-normal text-[32px] text-primary-black uppercase mb-[147px] w-[286px] leading-tight md:text-center md:mx-auto lg:text-[64px] lg:w-[572px] lg:text-left lg:mb-12"
            >
              {t("title")}
            </motion.h2>
            <motion.button
              ref={desktopButtonRef}
              initial={{ opacity: 0 }}
              animate={isDesktopButtonInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              onClick={handleConsultationClick}
              className="hidden lg:block font-montserrat font-normal text-sm text-primary-white bg-primary-black rounded-[32px] w-[317px] h-[52px] mr-auto hover:bg-transparent hover:text-primary-black hover:border-primary-black border transition-all duration-300 will-change-opacity"
            >
              {t("button")}
            </motion.button>
          </div>
          <motion.p
            ref={textRef}
            initial={{ x: 100, opacity: 0 }}
            animate={
              isTextInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-montserrat font-light text-base text-[#000] mb-[264px] w-[290px] md:text-center md:mx-auto lg:mx-0 lg:text-xl lg:w-[429px] lg:text-left lg:mb-0"
          >
            {t("description")}
          </motion.p>

          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0 }}
            animate={isButtonInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            onClick={handleConsultationClick}
            className="lg:hidden font-montserrat font-normal text-sm text-primary-white bg-primary-black rounded-[32px] w-[310px] h-[52px] flex justify-center items-center mx-auto hover:bg-transparent hover:text-primary-black hover:border-primary-black border transition-all duration-300 will-change-opacity"
          >
            {t("button")}
          </motion.button>
        </div>
      </Container>
      <Image
        src={step2Mob}
        alt="path of three"
        className="absolute bottom-[130px] left-0 -z-10 lg:hidden"
        width={200}
        height={200}
      />
      <Image
        src={step4Mob}
        alt="path of three"
        className="hidden absolute bottom-[42px] right-0 -z-10 lg:block"
        width={380}
        height={380}
      />
    </div>
  );
};

export default StepToDream;
