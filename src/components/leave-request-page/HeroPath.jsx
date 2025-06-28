"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "../Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imgMob1 from "../../../public/images/image/leave-request-img/leave-request-mob-1.webp";
import imgMob2 from "../../../public/images/image/leave-request-img/leave-request-mob-2.webp";
import imgMob3 from "../../../public/images/image/leave-request-img/leave-request-mob-3.webp";
import imgDesk1 from "../../../public/images/image/leave-request-img/leave-request-desk-1.webp";
import imgDesk2 from "../../../public/images/image/leave-request-img/leave-request-desk-2.webp";
import imgDesk3 from "../../../public/images/image/leave-request-img/leave-request-desk-3.webp";
import motifMob1 from "../../../public/images/image/leave-request-img/leave-motif-mob-1.webp";
import motifMob2 from "../../../public/images/image/leave-request-img/leave-motif-mob-2.webp";
import motifDesk1 from "../../../public/images/image/leave-request-img/leave-motif-desk-1.webp";
import motifDesk2 from "../../../public/images/image/leave-request-img/leave-motif-desk-2.webp";
import shadowMob from "../../../public/images/image/leave-request-img/leave-shadow-mob.png";
import shadowDesk from "../../../public/images/image/leave-request-img/leave-shadow-desk.png";
import mainMotifMob from "../../../public/images/image/leave-request-img/request-page-motif-mob.png";
import mainMotifDesk from "../../../public/images/image/leave-request-img/request-page-motif-desk.png";

const HeroPath = ({ onTypeSelect, selectedType }) => {
  const t = useTranslations("leaveRequest.hero");
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isSubtitleInView = useInView(subtitleRef, {
    once: true,
    margin: "-100px",
  });
  const isDescriptionInView = useInView(descriptionRef, {
    once: true,
    margin: "-100px",
  });
  const isImage1InView = useInView(image1Ref, { once: true, margin: "-100px" });
  const isImage2InView = useInView(image2Ref, { once: true, margin: "-100px" });
  const isImage3InView = useInView(image3Ref, { once: true, margin: "-100px" });

  const handleTypeClick = (type) => {
    onTypeSelect(type);
  };

  return (
    <div className="relative">
      <Image
        src={mainMotifMob}
        alt="leave-motif-mob-1"
        className="absolute top-[125px] right-0 -z-30 lg:hidden"
      />
      <Image
        src={mainMotifDesk}
        alt="leave-motif-mob-1"
        className="absolute top-[-130px] right-[-90px] -z-30 lg:block hidden"
      />
      <Container>
        <div className="pt-[30px] pb-[94px] lg:pt-[71px] lg:pb-[70px]">
          <motion.h1
            ref={titleRef}
            initial={{ x: -100, opacity: 0 }}
            animate={
              isTitleInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-arsenal font-normal text-[32px] text-center leading-[38px] text-primary-black uppercase mb-[264px] mx-auto relative lg:text-5xl lg:w-[539px] lg:text-left lg:mb-[134px]"
          >
            {t("title")}
          </motion.h1>
          <Image
            src={motifMob1}
            alt="leave-motif-mob-1"
            className="absolute top-[90px] left-0 -z-10 lg:hidden"
            width={140}
            height={140}
          />
          <Image
            src={motifDesk1}
            alt="leave-motif-mob-1"
            className="absolute top-[-90px] left-0  hidden lg:block"
            width={230}
            height={230}
          />
          <Image
            src={shadowMob}
            alt="leave-motif-mob-1"
            className="absolute top-[125px] right-[5px] -z-20 lg:hidden"
          />
          <Image
            src={shadowMob}
            alt="leave-motif-mob-1"
            className="absolute top-[45px] left-[5px] -z-10 opacity-20 lg:hidden"
          />
          <Image
            src={shadowDesk}
            alt="leave-motif-mob-1"
            className="absolute top-0 right-0 -z-20 hidden lg:block"
          />
          <Image
            src={shadowDesk}
            alt="leave-motif-mob-1"
            className="absolute top-[-245px] left-[-90px] -z-10 hidden lg:block"
          />
          <Image
            src={motifMob2}
            alt="leave-motif-mob-1"
            className="absolute top-[175px] md:top-[160px] right-0 -z-10 lg:hidden"
            width={210}
            height={210}
          />
          <Image
            src={motifDesk2}
            alt="leave-motif-mob-1"
            className="absolute bottom-[190px] right-0 -z-10 hidden lg:block"
            width={360}
            height={360}
          />
          <div>
            <motion.h2
              ref={subtitleRef}
              initial={{ x: 100, opacity: 0 }}
              animate={
                isSubtitleInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-arsenal font-normal text-[32px] leading-[39px] text-primary-black uppercase mb-6 md:text-center lg:text-left lg:text-4xl lg:leading-[43px] lg:mb-5"
            >
              {t("repairType.title")}
            </motion.h2>
            <motion.p
              ref={descriptionRef}
              initial={{ y: 100, opacity: 0 }}
              animate={
                isDescriptionInView
                  ? { y: 0, opacity: 1 }
                  : { y: 100, opacity: 0 }
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-montserrat font-light text-sm text-primary-black mb-10 md:text-center lg:text-left lg:text-base lg:leading-[19px] lg:w-[479px] lg:mb-16"
            >
              {t("repairType.description")}
            </motion.p>
            <div className="flex flex-col gap-6 md:items-center lg:flex-row lg:gap-5">
              <motion.div
                ref={image1Ref}
                initial={{ opacity: 0 }}
                animate={isImage1InView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                onClick={() => handleTypeClick("capital")}
                className="cursor-pointer transition-all duration-300"
              >
                <div
                  style={
                    selectedType === "capital"
                      ? {
                          background:
                            "linear-gradient(45deg, #7E7464, #2B6638)",
                          padding: "3px",
                          borderRadius: "12px",
                          display: "inline-block",
                        }
                      : {}
                  }
                >
                  <Image
                    src={imgMob1}
                    alt="leave-request-img"
                    className="rounded-xl lg:hidden"
                    width={310}
                    height={254}
                  />
                  <Image
                    src={imgDesk1}
                    alt="leave-request-img"
                    className="rounded-xl hidden lg:block"
                    width={387}
                    height={254}
                  />
                </div>
                <p className="font-arsenal font-normal text-base text-center mt-3 lg:mt-[18px] text-primary-black uppercase">
                  {t("repairType.types.capital")}
                </p>
              </motion.div>
              <motion.div
                ref={image2Ref}
                initial={{ opacity: 0 }}
                animate={isImage2InView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                onClick={() => handleTypeClick("cosmetic")}
                className="cursor-pointer transition-all duration-300"
              >
                <div
                  style={
                    selectedType === "cosmetic"
                      ? {
                          background:
                            "linear-gradient(45deg, #7E7464, #2B6638)",
                          padding: "3px",
                          borderRadius: "12px",
                          display: "inline-block",
                        }
                      : {}
                  }
                >
                  <Image
                    src={imgMob2}
                    alt="leave-request-img"
                    className="rounded-xl lg:hidden"
                    width={310}
                    height={254}
                  />
                  <Image
                    src={imgDesk2}
                    alt="leave-request-img"
                    className="rounded-xl hidden lg:block"
                    width={387}
                    height={254}
                  />
                </div>
                <p className="font-arsenal font-normal text-base text-center mt-3 lg:mt-[18px] text-primary-black uppercase">
                  {t("repairType.types.cosmetic")}
                </p>
              </motion.div>
              <motion.div
                ref={image3Ref}
                initial={{ opacity: 0 }}
                animate={isImage3InView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                onClick={() => handleTypeClick("design")}
                className="cursor-pointer transition-all duration-300"
              >
                <div
                  style={
                    selectedType === "design"
                      ? {
                          background:
                            "linear-gradient(45deg, #7E7464, #2B6638)",
                          padding: "3px",
                          borderRadius: "12px",
                          display: "inline-block",
                        }
                      : {}
                  }
                >
                  <Image
                    src={imgMob3}
                    alt="leave-request-img"
                    className="rounded-xl lg:hidden"
                    width={310}
                    height={254}
                  />
                  <Image
                    src={imgDesk3}
                    alt="leave-request-img"
                    className="rounded-xl hidden lg:block"
                    width={387}
                    height={254}
                  />
                </div>
                <p className="font-arsenal font-normal text-base text-center mt-3 lg:mt-[18px] text-primary-black uppercase">
                  {t("repairType.types.design")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroPath;
