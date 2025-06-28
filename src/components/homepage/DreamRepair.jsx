"use client";

import Image from "next/image";
import logo from "../../../public/images/SVG/logo-svg.svg";
import dreamMob1 from "../../../public/images/image/dream-img-mob.webp";
import dreamMob2 from "../../../public/images/image/dream-img-mob-2.webp";
import dreamMob3 from "../../../public/images/image/dream-img-mob-3.webp";
import dreamDesk1 from "../../../public/images/image/dream-img-desk.webp";
import dreamDesk2 from "../../../public/images/image/dream-img-desk-2.webp";
import dreamDesk3 from "../../../public/images/image/dream-img-desk-3.webp";
import { useTranslations } from "next-intl";
import Container from "../Container";
import { useEffect, useState, useRef } from "react";
import motifMob1 from "../../../public/images/image/dream-motif-mob-1.png";
import motifMob2 from "../../../public/images/image/dream-motif-mob-2.png";
import motifDesk1 from "../../../public/images/image/dream-motif-desk-1.png";
import motifDesk2 from "../../../public/images/image/dream-motif-desk-2.png";
import motifShadowMob from "../../../public/images/image/service-bg-shadow.png";
import motifShadowDesk from "../../../public/images/image/service-shadow-desk.png";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const DreamRepair = () => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const [cards, setCards] = useState([
    {
      id: 1,
      className: "top-card",
      mobImage: dreamMob1,
      deskImage: dreamDesk1,
    },
    {
      id: 2,
      className: "middle-card",
      mobImage: dreamMob2,
      deskImage: dreamDesk2,
    },
    {
      id: 3,
      className: "bottom-card",
      mobImage: dreamMob3,
      deskImage: dreamDesk3,
    },
  ]);

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);
  const cardsRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const desktopButtonRef = useRef(null);
  const additionalInfoRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-50px",
  });
  const isLogoInView = useInView(logoRef, { once: true, margin: "-50px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-50px" });
  const isMobileButtonInView = useInView(mobileButtonRef, {
    once: true,
    margin: "-50px",
  });
  const isDesktopButtonInView = useInView(desktopButtonRef, {
    once: true,
    margin: "-50px",
  });
  const isAdditionalInfoInView = useInView(additionalInfoRef, {
    once: true,
    margin: "-50px",
  });

  const handleConsultationClick = () => {
    router.push(`/${locale}/leave-request`);
  };

  return (
    <Container className="relative">
      <Image
        src={motifMob1}
        alt="motif image"
        className="absolute top-[130px] right-0 -z-20 md:top-[50px] lg:hidden"
        loading="lazy"
      />
      <Image
        src={motifDesk1}
        alt="motif image"
        className="absolute top-[50px] left-[90px] -z-20 lg:block hidden"
        loading="lazy"
      />
      <Image
        src={motifShadowMob}
        alt="motif image"
        className="absolute top-[140px] md:right-[350px] md:rotate-[90deg] opacity-80 right-0 -z-20 lg:hidden"
        loading="lazy"
      />
      <Image
        src={motifShadowDesk}
        alt="motif image"
        className="absolute top-[160px] left-[360px] -z-20 lg:block hidden"
        loading="lazy"
      />
      <Image
        src={motifShadowDesk}
        alt="motif image"
        className="absolute top-[40px] right-0 -z-20 lg:block hidden"
        loading="lazy"
      />
      <div className="pt-[94px] pb-[137px] lg:flex lg:justify-between lg:flex-row-reverse lg:pt-[213px] lg:pb-[186px]">
        <div className="mb-auto">
          <motion.h2
            ref={titleRef}
            initial={{ x: 100, opacity: 0 }}
            animate={
              isTitleInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-arsenal font-normal text-[32px] uppercase mb-[18px] md:text-center lg:text-right lg:text-[64px] lg:mb-1 lg:leading-none lg:w-[572px]"
          >
            {t("dreamRepair.title")}
          </motion.h2>
          <div className="lg:flex lg:justify-between lg:items-end lg:mb-9">
            <motion.div
              ref={logoRef}
              initial={{ opacity: 0 }}
              animate={isLogoInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <Image
                src={logo}
                alt="logo image"
                className="w-[46px] h-[72px] ml-auto mb-[26px] lg:w-[52px] lg:h-[80px] lg:m-0 lg:mb-4"
              />
            </motion.div>
            <motion.button
              ref={desktopButtonRef}
              initial={{ opacity: 0 }}
              animate={isDesktopButtonInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              onClick={handleConsultationClick}
              className="hidden md:hidden lg:block w-[317px] h-[52px] rounded-[32px] bg-primary-black text-primary-white font-montserrat font-normal text-sm leading-5 hover:bg-primary-white hover:text-primary-black hover:border-primary-black border transition-all duration-300 will-change-opacity"
            >
              {t("dreamRepair.button")}
            </motion.button>
          </div>
          <motion.p
            ref={contentRef}
            initial={{ y: 100, opacity: 0 }}
            animate={
              isContentInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-montserrat font-light text-base mb-[50px] w-[273px] md:text-center md:w-[373px] md:mx-auto lg:text-xl lg:w-[355px] lg:text-left lg:m-0"
          >
            {t("dreamRepair.description")}
          </motion.p>
        </div>
        <div className="lg:mr-16 lg:shrink-0">
          <div className="pb-14 lg:pb-10">
            <motion.div
              ref={cardsRef}
              initial={{ x: -100, opacity: 0 }}
              animate={
                isCardsInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-[310px] h-[207px] mx-auto lg:w-[564px] lg:h-[418px]"
            >
              <div className="card-stack">
                {cards.map((card) => (
                  <div key={card.id} className={`card-item ${card.className}`}>
                    <Image
                      src={card.mobImage}
                      alt="dream image"
                      className="w-[310px] h-[167px] object-cover mx-auto rounded-md lg:hidden"
                    />
                    <Image
                      src={card.deskImage}
                      alt="dream image"
                      className="w-[564px] h-[338px] object-cover mx-auto hidden rounded-xl lg:block"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.p
            ref={additionalInfoRef}
            initial={{ x: -100, opacity: 0 }}
            animate={
              isAdditionalInfoInView
                ? { x: 0, opacity: 1 }
                : { x: -100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden font-montserrat font-light text-base text-primary-black md:block md:text-center md:mb-6 lg:w-[399px] lg:text-left lg:mb-0"
          >
            {t("dreamRepair.additionalInfo")}
          </motion.p>
        </div>
        <motion.button
          ref={mobileButtonRef}
          initial={{ opacity: 0 }}
          animate={isMobileButtonInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          onClick={handleConsultationClick}
          className="lg:hidden w-[310px] h-[52px] rounded-[32px] bg-primary-black text-primary-white font-montserrat font-normal text-sm leading-5 mx-auto md:flex md:justify-center md:items-center hover:bg-primary-white hover:text-primary-black hover:border-primary-black border transition-all duration-300 will-change-opacity"
        >
          {t("dreamRepair.button")}
        </motion.button>
      </div>
      <Image
        src={motifMob2}
        alt="motif image"
        className="absolute bottom-[10px] md:bottom-[120px] right-0 -z-20 md:hidden"
      />
      <Image
        src={motifDesk2}
        alt="motif image"
        className="absolute bottom-[-110px] md:right-[-50px] lg:right-[-150px] -z-20 md:block hidden"
      />
      <Image
        src={motifShadowMob}
        alt="motif image"
        className="absolute bottom-[150px] rotate-[135deg] md:rotate-[185deg] lg:rotate-0 right-0 -z-20 lg:bottom-[190px] lg:right-[-90px]"
      />
      <Image
        src={motifShadowMob}
        alt="motif image"
        className="absolute bottom-0 right-[400px] opacity-80 rotate-[65deg] -z-20 md:block hidden"
      />
    </Container>
  );
};

export default DreamRepair;
