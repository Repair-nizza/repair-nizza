"use client";

import bgMob from "../../../public/images/image/about-bg-mob.webp";
import bgDesk from "../../../public/images/image/about-bg-desk.webp";
import Container from "../Container";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const AboutUs = () => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  const handlePortfolioClick = () => {
    router.push(`/${locale}/portfolio`);
  };

  // Desktop refs
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);
  const advantagesRef = useRef(null);

  // Mobile refs
  const mobileTitleRef = useRef(null);
  const mobileDescriptionRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const mobileCardRef = useRef(null);
  const mobileAdvantagesRef = useRef(null);

  // Desktop view checks
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isDescriptionInView = useInView(descriptionRef, {
    once: true,
    margin: "-100px",
  });
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-100px" });
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });
  const isAdvantagesInView = useInView(advantagesRef, {
    once: true,
    margin: "-100px",
  });

  // Mobile view checks
  const isMobileTitleInView = useInView(mobileTitleRef, {
    once: true,
    margin: "-100px",
  });
  const isMobileDescriptionInView = useInView(mobileDescriptionRef, {
    once: true,
    margin: "-100px",
  });
  const isMobileButtonInView = useInView(mobileButtonRef, {
    once: true,
    margin: "-100px",
  });
  const isMobileCardInView = useInView(mobileCardRef, {
    once: true,
    margin: "-100px",
  });
  const isMobileAdvantagesInView = useInView(mobileAdvantagesRef, {
    once: true,
    margin: "-100px",
  });

  const advantages = [
    "aboutUs.whyChooseUs.advantages.fullService",
    "aboutUs.whyChooseUs.advantages.transparentEstimate",
    "aboutUs.whyChooseUs.advantages.warranty",
    "aboutUs.whyChooseUs.advantages.control",
    "aboutUs.whyChooseUs.advantages.experience",
  ];

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgMob.src})` }}
        className="bg-cover bg-center h-[896px] w-full md:hidden overflow-hidden"
      >
        <Container>
          <div className="pt-[72px] relative">
            <div>
              <motion.h2
                ref={mobileTitleRef}
                initial={{ x: -100, opacity: 0 }}
                animate={
                  isMobileTitleInView
                    ? { x: 0, opacity: 1 }
                    : { x: -100, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-arsenal font-normal text-4xl text-primary-white uppercase mb-[18px] leading-[43px]"
              >
                {t("aboutUs.title")}
              </motion.h2>
              <motion.p
                ref={mobileDescriptionRef}
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isMobileDescriptionInView
                    ? { y: 0, opacity: 1 }
                    : { y: 100, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-montserrat font-normal text-sm text-primary-white mb-9 w-[295px]"
              >
                {t("aboutUs.description")}
              </motion.p>
              <motion.button
                ref={mobileButtonRef}
                initial={{ opacity: 0 }}
                animate={isMobileButtonInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                onClick={handlePortfolioClick}
                className="w-[310px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-normal text-sm mx-auto leading-5 hover:bg-transparent hover:text-primary-white hover:border-primary-white border transition-all duration-300 will-change-opacity"
              >
                {t("aboutUs.button")}
              </motion.button>
            </div>
            <motion.div
              ref={mobileCardRef}
              initial={{ y: "100%" }}
              animate={isMobileCardInView ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute bottom-[-555px] left-0 w-[310px] rounded-t-[20px] py-9 px-[22px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]"
            >
              <motion.h3
                ref={mobileAdvantagesRef}
                initial={{ x: 100, opacity: 0 }}
                animate={
                  isMobileAdvantagesInView
                    ? { x: 0, opacity: 1 }
                    : { x: 100, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-arsenal font-normal text-[32px] text-primary-white uppercase mb-9 leading-[38px]"
              >
                {t("aboutUs.whyChooseUs.title")}
              </motion.h3>
              <ul className="flex flex-col gap-4">
                {advantages.map((advantage, index) => (
                  <motion.li
                    key={advantage}
                    initial={{ x: 100, opacity: 0 }}
                    animate={
                      isMobileAdvantagesInView
                        ? { x: 0, opacity: 1 }
                        : { x: 100, opacity: 0 }
                    }
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="gradient-border relative rounded-[6px] py-4 px-5"
                  >
                    <p className="font-montserrat font-normal text-sm text-primary-white text-right relative">
                      {t(advantage)}
                    </p>
                    <div className="w-5 h-5 bg-primary-white rounded-full absolute top-1/2 -translate-y-1/2 left-3" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </div>
      <div
        style={{ backgroundImage: `url(${bgDesk.src})` }}
        className="bg-cover bg-center h-[896px] lg:h-[755px] w-full hidden md:block overflow-hidden"
      >
        <Container>
          <div className="pt-[72px] relative lg:pt-[75px]">
            <div className="md:flex md:flex-col md:justify-center md:items-center lg:justify-end lg:items-end">
              <motion.h2
                ref={titleRef}
                initial={{ x: 100, opacity: 0 }}
                animate={
                  isTitleInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-arsenal font-normal text-4xl text-primary-white uppercase mb-[18px] leading-[43px] lg:text-[82px] lg:leading-[98px] lg:mb-[18px]"
              >
                {t("aboutUs.title")}
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
                className="font-montserrat font-normal text-sm text-primary-white mb-9 w-[295px] md:text-center lg:text-base lg:text-right lg:mb-10 lg:w-[575px]"
              >
                {t("aboutUs.description")}
              </motion.p>
              <motion.button
                ref={buttonRef}
                initial={{ opacity: 0 }}
                animate={isButtonInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                onClick={handlePortfolioClick}
                className="w-[310px] lg:w-[317px] h-[52px] rounded-[32px] lg:mx-0 lg:ml-auto bg-primary-white text-primary-black font-montserrat font-normal text-sm mx-auto leading-5 hover:bg-transparent hover:text-primary-white hover:border-primary-white border transition-all duration-300 will-change-opacity"
              >
                {t("aboutUs.button")}
              </motion.button>
            </div>
            <motion.div
              ref={cardRef}
              initial={{ y: "100%" }}
              animate={isCardInView ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute bottom-[-555px] lg:bottom-[-400px] left-0 w-[310px] lg:w-[359px] rounded-t-[20px] py-9 px-[22px] lg:pt-9 lg:px-9 lg:pb-[62px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]"
            >
              <h3 className="font-arsenal font-normal text-[32px] lg:text-[40px] text-primary-white uppercase mb-9 leading-[38px]">
                {t("aboutUs.whyChooseUs.title")}
              </h3>
              <ul ref={advantagesRef} className="flex flex-col gap-4">
                {advantages.map((advantage, index) => (
                  <motion.li
                    key={advantage}
                    initial={{ x: 100, opacity: 0 }}
                    animate={
                      isAdvantagesInView
                        ? { x: 0, opacity: 1 }
                        : { x: 100, opacity: 0 }
                    }
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="gradient-border relative rounded-[6px] py-4 px-5"
                  >
                    <p className="font-montserrat font-normal text-sm text-primary-white text-right relative lg:text-base">
                      {t(advantage)}
                    </p>
                    <div className="w-5 h-5 bg-primary-white rounded-full absolute top-1/2 -translate-y-1/2 left-3" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
