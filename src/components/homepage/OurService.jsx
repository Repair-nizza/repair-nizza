"use client";
import { useTranslations } from "next-intl";
import Container from "../Container";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import logo from "../../../public/images/SVG/logo-svg.svg";
import motifDesk from "../../../public/images/image/service-motif-test.png";
import motifDesk2 from "../../../public/images/image/service-motif-desk.png";
import motifMob from "../../../public/images/image/service-motif-mob.png";
import motifMob2 from "../../../public/images/image/service-motif-2-mob.png";
import bgShadow from "../../../public/images/image/service-bg-shadow.png";
import bgShadow2 from "../../../public/images/image/service-bg-shadow-2.png";
import bgShadowDesk from "../../../public/images/image/service-shadow-desk.png";
import sericeImg1Mob1 from "../../../public/images/image/service-img-1-mob.webp";
import sericeImg2Mob2 from "../../../public/images/image/service-img-2-mob.webp";
import sericeImgMobDesk1 from "../../../public/images/image/service-img-1-desk.webp";
import sericeImgMobDesk2 from "../../../public/images/image/service-img-2-desk.webp";
import plus from "../../../public/images/SVG/icon-plus.svg";
import minus from "../../../public/images/SVG/icon-minus.svg";
import { useState, useRef, useEffect } from "react";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <span>{count}</span>;
};

const OurService = () => {
  const t = useTranslations("ourService");
  const [openCards, setOpenCards] = useState({
    cosmetic: false,
    capital: false,
    fullSupport: false,
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "0px" });
  const uniquenessRef = useRef(null);
  const isUniquenessInView = useInView(uniquenessRef, {
    once: true,
    margin: "0px",
  });

  const toggleCard = (cardName) => {
    setOpenCards((prev) => {
      if (!prev[cardName]) {
        return {
          cosmetic: false,
          capital: false,
          fullSupport: false,
          [cardName]: true,
        };
      } else {
        return {
          ...prev,
          [cardName]: false,
        };
      }
    });
  };

  return (
    <Container className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src={motifDesk}
          alt="motif image"
          className="absolute lg:top-[150px] md:top-[175px] lg:right-[-400px] md:right-[-140px] md:block hidden"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src={motifMob}
          alt="motif image"
          className="absolute top-[180px] right-0 -z-20 md:hidden"
        />
      </motion.div>
      <Image
        src={bgShadow}
        alt="motif image"
        className="absolute top-[175px] md:top-[170px] md:rotate-[-3deg] right-0 -z-10 lg:hidden"
      />
      <div className="pt-[94px] mb-[215px] w-[310px] md:w-[715px] lg:w-[1200px] relative md:mb-[150px] lg:mb-[136px]">
        <div
          ref={ref}
          className="relative mb-16 lg:flex lg:justify-between lg:mb-[99px] lg:items-start"
        >
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-arsenal font-normal text-[22px] text-primary-black uppercase w-[299px] mb-[31px] md:text-3xl md:w-[450px] md:text-center lg:text-5xl lg:w-[660px] lg:text-left"
          >
            {t("title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src={logo}
              alt="logo image"
              width={36}
              height={56}
              className="ml-auto relative my-8 lg:my-0 lg:ml-0 lg:w-[53px] lg:h-[80px]"
            />
          </motion.div>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-montserrat font-light text-sm text-primary-black text-right w-[290px] ml-auto md:text-base md:w-[450px] md:text-center lg:ml-0 lg:text-left lg:w-[333px]"
          >
            {t("description")}
          </motion.p>
        </div>
        <div ref={contentRef} className="">
          <div className="lg:flex">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={
                isContentInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src={sericeImg1Mob1}
                alt="service image"
                className="mb-10 rounded-lg lg:hidden"
                width={310}
                height={295}
              />
              <Image
                src={sericeImgMobDesk1}
                alt="service image"
                className="rounded-lg lg:block hidden lg:mr-[118px]"
                width={488}
                height={518}
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={
                isContentInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-7 lg:mb-10">
                <div
                  className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer lg:w-[590px] lg:mb-6"
                  onClick={() => toggleCard("cosmetic")}
                >
                  <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase lg:text-[32px]">
                    {t("cards.cosmetic.title")}
                  </h3>
                  <Image
                    src={openCards.cosmetic ? minus : plus}
                    alt={openCards.cosmetic ? "icon minus" : "icon plus"}
                    className="transition-transform duration-300 lg:w-[32px] lg:h-[32px]"
                    style={{
                      transform: openCards.cosmetic
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </div>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openCards.cosmetic ? "200px" : "0",
                    opacity: openCards.cosmetic ? 1 : 0,
                  }}
                >
                  <p className="font-montserrat font-light text-xs text-primary-black md:w-[300px] lg:w-[530px] lg:text-sm">
                    {t("cards.cosmetic.description")}
                  </p>
                </div>
              </div>
              <div className="mb-7 lg:mb-10">
                <div
                  className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer lg:w-[590px] lg:mb-6"
                  onClick={() => toggleCard("capital")}
                >
                  <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase lg:text-[32px]">
                    {t("cards.capital.title")}
                  </h3>
                  <Image
                    src={openCards.capital ? minus : plus}
                    alt={openCards.capital ? "icon minus" : "icon plus"}
                    className="transition-transform duration-300 lg:w-[32px] lg:h-[32px]"
                    style={{
                      transform: openCards.capital
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </div>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openCards.capital ? "200px" : "0",
                    opacity: openCards.capital ? 1 : 0,
                  }}
                >
                  <p className="font-montserrat font-light text-xs text-primary-black md:w-[300px] lg:w-[530px] lg:text-sm">
                    {t("cards.capital.description")}
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer lg:w-[590px] lg:mb-6"
                  onClick={() => toggleCard("fullSupport")}
                >
                  <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase lg:text-[32px]">
                    {t("cards.fullSupport.title")}
                  </h3>
                  <Image
                    src={openCards.fullSupport ? minus : plus}
                    alt={openCards.fullSupport ? "icon minus" : "icon plus"}
                    className="transition-transform duration-300 lg:w-[32px] lg:h-[32px]"
                    style={{
                      transform: openCards.fullSupport
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </div>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openCards.fullSupport ? "200px" : "0",
                    opacity: openCards.fullSupport ? 1 : 0,
                  }}
                >
                  <p className="font-montserrat font-light text-xs text-primary-black md:w-[300px] lg:w-[530px] lg:text-sm">
                    {t("cards.fullSupport.description")}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isContentInView
                    ? { y: 0, opacity: 1 }
                    : { y: 100, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              >
                <Image
                  src={sericeImg2Mob2}
                  alt="second service image"
                  className="rounded-lg mt-9 md:mt-0 md:ml-auto md:h-[295px] lg:hidden"
                  width={310}
                  height={222}
                />
                <Image
                  src={sericeImgMobDesk2}
                  alt="second service image"
                  className="rounded-lg lg:block hidden mt-[62px]"
                  width={594}
                  height={222}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        ref={uniquenessRef}
        className="pb-[94px] lg:flex lg:justify-between lg:items-center"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={
            isUniquenessInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-arsenal font-normal text-[32px] text-primary-black uppercase mb-6 leading-[39px] lg:text-5xl lg:leading-[72px]">
            {t("uniqueness.title")}
          </h2>
          <p className="font-montserrat font-light text-sm text-primary-black mb-12 lg:text-base lg:w-[458px]">
            {t("uniqueness.description")}
          </p>
        </motion.div>
        <motion.ul
          initial={{ x: 100, opacity: 0 }}
          animate={
            isUniquenessInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex gap-8 md:justify-center"
        >
          <li className="flex flex-col lg:gap-2">
            <p className="font-arsenal font-normal text-[40px] text-primary-black leading-[72px] lg:text-5xl">
              {isUniquenessInView && <Counter end={90} />}%
            </p>
            <p className="font-montserrat font-normal text-xs text-primary-black lg:text-[13px]">
              {t("uniqueness.stats.satisfied.label")}
            </p>
          </li>
          <li className="flex flex-col lg:gap-2">
            <p className="font-arsenal font-normal text-[40px] text-primary-black leading-[72px] lg:text-5xl">
              {isUniquenessInView && <Counter end={200} />}+
            </p>
            <p className="font-montserrat font-normal text-xs text-primary-black lg:text-[13px]">
              {t("uniqueness.stats.completed.label")}
            </p>
          </li>
          <li className="flex flex-col lg:gap-2">
            <p className="font-arsenal font-normal text-[40px] text-primary-black leading-[72px] lg:text-5xl">
              {isUniquenessInView && <Counter end={10} />}+
            </p>
            <p className="font-montserrat font-normal text-xs text-primary-black lg:text-[13px]">
              {t("uniqueness.stats.experience.label")}
            </p>
          </li>
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <Image
          src={motifMob2}
          alt="motif image"
          className="absolute bottom-[580px] md:bottom-[360px] right-[30px] md:right-[20px] md:rotate-[8deg] -z-20 lg:hidden"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <Image
          src={motifDesk2}
          alt="motif image"
          className="absolute bottom-[280px] left-[305px] -z-20 lg:block hidden"
        />
      </motion.div>
      <Image
        src={bgShadow2}
        alt="motif image"
        className="hiden absolute bottom-[550px] md:bottom-[400px] right-0 md:left-[70px] md:opacity-90 -z-10 lg:hidden"
      />
      <Image
        src={bgShadowDesk}
        alt="motif image"
        className="absolute bottom-[285px] right-[110px] opacity-80 -z-10 lg:block hidden"
      />
    </Container>
  );
};

export default OurService;
