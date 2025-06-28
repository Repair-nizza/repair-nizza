"use client";

import sectionBgMob from "../../../public/images/image/portfolio-bg-mob.webp";
import sectionBgDesk from "../../../public/images/image/portfolio-bg-desk.webp";
import Container from "../Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import arrowWhite from "../../../public/images/SVG/arrow-white-portfolio.svg";
import arrowBlack from "../../../public/images/SVG/arrow-black-portfolio.svg";
import arrowDiagonal from "../../../public/images/SVG/arrow-diagonal-portfolio.svg";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const PortfolioCard = ({ data }) => {
  const router = useRouter();
  const locale = useLocale();

  const handleProjectClick = () => {
    router.push(`/${locale}/projects/${data._id}`);
  };

  if (!data?.title || !data?.title[locale]) return null;

  return (
    <div className="relative h-[402px] lg:h-[418px]">
      {data.mainImage?.asset?.url && (
        <Image
          src={data.mainImage.asset.url}
          alt={data.title[locale]}
          width={387}
          height={247}
          className="rounded-t-[20px] h-[247px] w-[310px] md:w-[345px] lg:w-[387px] object-cover"
        />
      )}
      <div className="w-[310px] md:w-[345px] lg:w-[387px] rounded-b-[20px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-7 pl-6 pr-10">
        <h3 className="font-arsenal font-normal text-base text-primary-white leading-[19px] w-[174px] uppercase mb-4 lg:text-xl lg:w-[246px]">
          {data.title[locale]}
        </h3>
        <p className="font-montserrat font-light text-xs lg:text-sm text-primary-white">
          {data.subtitle[locale]}
        </p>
      </div>
      <button
        onClick={handleProjectClick}
        className="absolute top-[217px] md:top-[220px] right-[24px] w-[55px] h-[55px] flex items-center justify-center bg-primary-white rounded-full hover:scale-110 transition-all duration-300"
      >
        <Image src={arrowDiagonal} alt="arrow button" />
      </button>
    </div>
  );
};

const PortfolioSection = ({ portfolioData }) => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const [isMobile, setIsMobile] = useState(true);
  const [swiper, setSwiper] = useState(null);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isDescriptionInView = useInView(descriptionRef, {
    once: true,
    margin: "-100px",
  });
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-100px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const handlePortfolioClick = () => {
    router.push(`/${locale}/portfolio`);
  };

  if (!portfolioData || portfolioData.length === 0) return null;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (swiper) {
        swiper.update();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [swiper]);

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="portfolio-section-bg bg-cover bg-center h-[866px] w-full mx-auto md:h-[724px] lg:h-[758px] pt-[72px] pb-9 lg:pb-[70px]">
      <style jsx>{`
        .portfolio-section-bg {
          background-image: url(${sectionBgMob.src});
        }
        @media (min-width: 768px) {
          .portfolio-section-bg {
            background-image: url(${sectionBgDesk.src});
          }
        }
      `}</style>
      <Container>
        <div className="mb-12 md:flex md:justify-between md:mb-10 lg:items-center lg:mb-[68px]">
          <motion.h2
            ref={titleRef}
            initial={{ x: -100, opacity: 0 }}
            animate={
              isTitleInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-arsenal font-normal text-4xl text-primary-white text-center mb-[19px] mx-auto uppercase md:mb-0 md:text-left lg:text-5xl lg:mx-0 md:order-1"
          >
            {t("portfolioSection.title")}
          </motion.h2>
          <motion.p
            ref={descriptionRef}
            initial={{ x: 100, opacity: 0 }}
            animate={
              isDescriptionInView
                ? { x: 0, opacity: 1 }
                : { x: 100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-montserrat font-light text-sm text-primary-white text-center w-[242px] mx-auto mb-11 md:w-[330px] md:mb-0 md:text-right lg:text-left md:order-3 lg:mx-0 lg:text-xl"
          >
            {t("portfolioSection.description")}
          </motion.p>
          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0 }}
            animate={isButtonInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            onClick={handlePortfolioClick}
            className="w-[310px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-normal text-sm mx-auto leading-5 block md:mb-0 md:order-2 lg:w-[258px] hover:bg-transparent hover:text-primary-white hover:border-primary-white border transition-all duration-300"
          >
            {t("portfolioSection.button")}
          </motion.button>
        </div>
        <motion.div
          ref={cardsRef}
          initial={{ y: 100, opacity: 0 }}
          animate={
            isCardsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-[402px] lg:h-[418px]"
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            onSwiper={setSwiper}
            observer={true}
            observeParents={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="h-full"
          >
            {portfolioData.map((project, index) => (
              <SwiperSlide key={project._id || index} className="h-full">
                <PortfolioCard data={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={
            isCardsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center gap-6 md:gap-10 lg:hidden mt-6"
        >
          <div
            onClick={handlePrevClick}
            className="border border-primary-white rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-white group transition-all duration-300 cursor-pointer"
          >
            <div className="bg-transparent border border-primary-white rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-black transition-all duration-300">
              <Image
                src={arrowWhite}
                alt="arrow button"
                className="block group-hover:hidden"
              />
              <Image
                src={arrowBlack}
                alt="arrow button"
                className="rotate-180 hidden group-hover:block"
              />
            </div>
          </div>
          <div
            onClick={handleNextClick}
            className="border border-primary-white rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-white group transition-all duration-300 cursor-pointer"
          >
            <div className="bg-transparent border border-primary-white rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-black transition-all duration-300">
              <Image
                src={arrowWhite}
                alt="arrow button"
                className="rotate-180 block group-hover:hidden"
              />
              <Image
                src={arrowBlack}
                alt="arrow button"
                className="hidden group-hover:block"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default PortfolioSection;
