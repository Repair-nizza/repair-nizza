"use client";

import React, { useState, useRef } from "react";
import Container from "../Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import motif from "../../../public/images/image/porto-page-motif.png";
import shadow from "../../../public/images/image/porto-page-shadow.png";
import arrowWhite from "../../../public/images/SVG/arrow-white-portfolio.svg";
import arrowBlack from "../../../public/images/SVG/arrow-black-portfolio.svg";
import ArrowDiagonalButton from "../ArrowDiagonalButton";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import AutoFitText from "../shared/autoFillText/AutoFillText";
import { urlForSanityImage } from "@/utils/getUrlForSanityImage";

const useMediaQuery = query => {
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
            {(data.mainImage?.asset?.url ||
                data.mobileMainImage?.asset?.url) && (
                <div className="relative w-[310px] h-[402px] lg:w-[590px] lg:h-[309px]">
                    {data.mainImage?.asset?.url && (
                        <Image
                            src={urlForSanityImage(data.mainImage)
                                .fit("crop")
                                .quality(90)
                                .url()}
                            alt={data.title[locale]}
                            fill
                            className="rounded-[20px] object-cover hidden lg:block"
                            sizes="590px"
                        />
                    )}
                    {(data.mobileMainImage?.asset?.url ||
                        data.mainImage?.asset?.url) && (
                        <Image
                            src={urlForSanityImage(
                                data.mobileMainImage || data.mainImage
                            )
                                .fit("crop")
                                .quality(90)
                                .url()}
                            alt={data.title[locale]}
                            fill
                            className="rounded-[20px] object-cover block lg:hidden"
                            sizes="310px"
                        />
                    )}
                </div>
            )}
            <div className="absolute bottom-0 left-0 w-[310px] lg:w-[590px] rounded-b-[20px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] pt-4 pb-5 pr-10 pl-[25px] lg:pt-9 lg:pb-[34px] lg:pl-[28px] lg:pr-[133px]">
                <AutoFitText
                    as="h3"
                    min={16}
                    max={30}
                    className="font-arsenal font-normal text-primary-white leading-[19px] w-[174px] uppercase mb-3 lg:leading-[36px] lg:mb-4 lg:w-full lg:max-h-[72px]"
                >
                    {data.title[locale]}
                </AutoFitText>

                <p className="font-montserrat font-light text-xs lg:text-base lg:leading-[19px] text-primary-white lg:w-[404px] line-clamp-3">
                    {data.subtitle[locale]}
                </p>
                <ArrowDiagonalButton
                    onClick={handleProjectClick}
                    variant="white"
                    className="top-[-27px] lg:top-[24px] right-[30px] lg:right-[25px]"
                />
            </div>
        </div>
    );
};

const PortfolioComponent = ({ projects }) => {
    const t = useTranslations("portfolioPage");
    const locale = useLocale();
    const [currentPage, setCurrentPage] = useState(0);
    const isDesktop = useMediaQuery("(min-width: 1280px)");
    const itemsPerPage = isDesktop ? 6 : 4;
    const portfolioRef = useRef(null);

    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

    const displayProjects = projects || [];

    const scrollToTop = () => {
        portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handlePrevClick = () => {
        setCurrentPage(prev =>
            prev > 0
                ? prev - 1
                : Math.ceil(displayProjects.length / itemsPerPage) - 1
        );
        scrollToTop();
    };

    const handleNextClick = () => {
        setCurrentPage(prev =>
            prev < Math.ceil(displayProjects.length / itemsPerPage) - 1
                ? prev + 1
                : 0
        );
        scrollToTop();
    };

    const handlePageClick = page => {
        setCurrentPage(page);
        scrollToTop();
    };

    const currentItems = displayProjects.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const totalPages = Math.ceil(displayProjects.length / itemsPerPage);

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
                            isTitleInView
                                ? { x: 0, opacity: 1 }
                                : { x: -100, opacity: 0 }
                        }
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="font-arsenal font-normal text-primary-black uppercase text-[22px] mb-6 md:text-3xl md:text-center lg:text-5xl lg:text-left"
                    >
                        {t("title")}
                    </motion.h1>

                    <motion.div
                        ref={cardsRef}
                        initial={{ y: 100, opacity: 0 }}
                        animate={
                            isCardsInView
                                ? { y: 0, opacity: 1 }
                                : { y: 100, opacity: 0 }
                        }
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col gap-[26px] mb-10 md:flex-row md:flex-wrap md:justify-center md:gap-[26px] lg:gap-5"
                    >
                        {displayProjects.length === 0 ? (
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

                    {displayProjects.length > 0 && (
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
