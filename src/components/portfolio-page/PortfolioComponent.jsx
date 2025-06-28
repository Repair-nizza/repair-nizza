"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Container from "../Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import motif from "../../../public/images/image/porto-page-motif.png";
import shadow from "../../../public/images/image/porto-page-shadow.png";
import arrowWhite from "../../../public/images/SVG/arrow-white-portfolio.svg";
import arrowBlack from "../../../public/images/SVG/arrow-black-portfolio.svg";
import arrowDiagonal from "../../../public/images/SVG/arrow-diagonal-portfolio.svg";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const PortfolioCard = ({ data }) => {
  const router = useRouter();
  const locale = useLocale();

  const handleProjectClick = () => {
    router.push(`/${locale}/projects/${data._id}`);
  };

  if (!data?.title || !data?.title[locale]) return null;

  return (
    <div className="relative">
      {data.mainImage?.asset?.url && (
        <div className="relative w-[310px] h-[402px] lg:w-[590px] lg:h-[309px]">
          <Image
            src={data.mainImage.asset.url}
            alt={data.title[locale]}
            fill
            className="rounded-[20px] object-cover"
          />
        </div>
      )}
      <div className="absolute bottom-0 left-0 w-[310px] lg:w-[590px] rounded-b-[20px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] pt-4 pb-5 pr-10 pl-[25px] lg:pt-9 lg:pb-[34px] lg:pl-[28px] lg:pr-[133px]">
        <h3 className="font-arsenal font-normal text-base text-primary-white leading-[19px] w-[174px] uppercase mb-3 lg:text-3xl lg:leading-[36px] lg:mb-4 lg:w-full">
          {data.title[locale]}
        </h3>
        <p className="font-montserrat font-light text-xs lg:text-base lg:leading-[19px] text-primary-white lg:w-[404px]">
          {data.subtitle[locale]}
        </p>
      </div>
      <button
        onClick={handleProjectClick}
        className="absolute top-[260px] lg:top-[180px] right-[30px] lg:right-[25px] w-[55px] h-[55px] flex items-center justify-center bg-primary-white rounded-full hover:scale-110 transition-all duration-300"
      >
        <Image src={arrowDiagonal} alt="arrow button" />
      </button>
    </div>
  );
};

const PortfolioComponent = ({ projects }) => {
  const t = useTranslations("portfolioPage");
  const [currentPage, setCurrentPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const itemsPerPage = isDesktop ? 6 : 4;
  const portfolioRef = useRef(null);

  const titleRef = useRef(null);
  const filtersRef = useRef(null);
  const cardsRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isFiltersInView = useInView(filtersRef, {
    once: true,
    margin: "-100px",
  });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.style === activeFilter);
  }, [projects, activeFilter]);

  const scrollToTop = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) =>
      prev > 0
        ? prev - 1
        : Math.ceil(filteredProjects.length / itemsPerPage) - 1
    );
    scrollToTop();
  };

  const handleNextClick = () => {
    setCurrentPage((prev) =>
      prev < Math.ceil(filteredProjects.length / itemsPerPage) - 1
        ? prev + 1
        : 0
    );
    scrollToTop();
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const currentItems = filteredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  return (
    <div ref={portfolioRef}>
      <Container className="relative">
        <Image
          src={motif}
          alt="motif image"
          className="hidden lg:block absolute top-[-60px] right-[-300px]"
        />
        <Image
          src={shadow}
          alt="shadow image"
          className="hidden lg:block absolute top-0 right-[-290px] opacity-90"
        />
        <div className="pt-[34px] pb-[94px]">
          <motion.h1
            ref={titleRef}
            initial={{ x: -100, opacity: 0 }}
            animate={
              isTitleInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-arsenal font-normal text-primary-black uppercase text-[22px] mb-6 md:text-3xl md:text-center lg:text-5xl lg:text-left"
          >
            {t("title")}
          </motion.h1>
          <motion.div
            ref={filtersRef}
            initial={{ x: 100, opacity: 0 }}
            animate={
              isFiltersInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-2 mb-10 md:flex-row md:justify-center lg:gap-5 lg:justify-start lg:mb-[50px]"
          >
            <button
              onClick={() => {
                setActiveFilter("all");
                setCurrentPage(0);
                scrollToTop();
              }}
              className={`w-[310px] md:w-[234px] lg:w-[234px] h-[34px] lg:h-[52px] rounded-[40px] font-arsenal font-normal text-xs md:text-sm lg:text-xl leading-[14px] lg:leading-6 transition-all duration-300 relative z-10 ${
                activeFilter === "all"
                  ? "bg-primary-black text-primary-white"
                  : "bg-transparent border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white"
              }`}
            >
              {t("filters.minimalism")}
            </button>
            <button
              onClick={() => {
                setActiveFilter("neoclassic");
                setCurrentPage(0);
                scrollToTop();
              }}
              className={`w-[310px] md:w-[234px] lg:w-[186px] h-[34px] lg:h-[52px] rounded-[40px] font-arsenal font-normal text-xs md:text-sm lg:text-xl leading-[14px] lg:leading-6 transition-all duration-300 relative z-10 ${
                activeFilter === "neoclassic"
                  ? "bg-primary-black text-primary-white"
                  : "bg-transparent border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white"
              }`}
            >
              {t("filters.neoclassic")}
            </button>
            <button
              onClick={() => {
                setActiveFilter("modern");
                setCurrentPage(0);
                scrollToTop();
              }}
              className={`w-[310px] md:w-[234px] lg:w-[186px] h-[34px] lg:h-[52px] rounded-[40px] font-arsenal font-normal text-xs md:text-sm lg:text-xl leading-[14px] lg:leading-6 transition-all duration-300 relative z-10 ${
                activeFilter === "modern"
                  ? "bg-primary-black text-primary-white"
                  : "bg-transparent border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white"
              }`}
            >
              {t("filters.modern")}
            </button>
          </motion.div>

          <motion.div
            ref={cardsRef}
            initial={{ y: 100, opacity: 0 }}
            animate={
              isCardsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-[26px] mb-10 md:flex-row md:flex-wrap md:justify-center md:gap-[26px] lg:gap-5"
          >
            {filteredProjects.length === 0 ? (
              <div className="w-full text-center font-arsenal text-xl md:text-2xl lg:text-3xl text-primary-black relative z-10">
                {t("noProjects")}
              </div>
            ) : (
              currentItems.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ y: 100, opacity: 0 }}
                  animate={
                    isCardsInView
                      ? { y: 0, opacity: 1 }
                      : { y: 100, opacity: 0 }
                  }
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <PortfolioCard data={project} />
                </motion.div>
              ))
            )}
          </motion.div>

          {filteredProjects.length > 0 && (
            <div className="flex justify-center items-center gap-6 md:gap-10">
              <div
                onClick={handlePrevClick}
                className="border border-primary-black rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-black group transition-all duration-300 cursor-pointer"
              >
                <div className="bg-transparent border border-primary-black rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-white transition-all duration-300">
                  <Image
                    src={arrowBlack}
                    alt="arrow button"
                    className="block group-hover:hidden transition-transform duration-300 rotate-180"
                  />
                  <Image
                    src={arrowWhite}
                    alt="arrow button"
                    className="hidden group-hover:block transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex gap-4 items-center">
                {Array.from({ length: totalPages }, (_, i) => (
                  <span
                    key={i}
                    className={`font-montserrat text-lg cursor-pointer ${
                      currentPage === i
                        ? "border border-primary-black rounded-full w-[30px] h-[30px] flex items-center justify-center"
                        : ""
                    }`}
                    onClick={() => handlePageClick(i)}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>

              <div
                onClick={handleNextClick}
                className="border border-primary-black rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-black group transition-all duration-300 cursor-pointer"
              >
                <div className="bg-transparent border border-primary-black rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-white transition-all duration-300">
                  <Image
                    src={arrowBlack}
                    alt="arrow button"
                    className="block group-hover:hidden transition-transform duration-300"
                  />
                  <Image
                    src={arrowWhite}
                    alt="arrow button"
                    className="hidden group-hover:block transition-transform duration-300 rotate-180"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PortfolioComponent;
