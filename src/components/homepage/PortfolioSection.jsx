"use client";

import sectionBgMob from "../../../public/images/image/portfolio-bg-mob.webp";
import sectionBgDesk from "../../../public/images/image/portfolio-bg-desk.webp";
import Container from "../Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import arrowWhite from "../../../public/images/SVG/arrow-white-portfolio.svg";
import arrowBlack from "../../../public/images/SVG/arrow-black-portfolio.svg";
import ArrowDiagonalButton from "../ArrowDiagonalButton";
import { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperWrapper from "../shared/swiper/SwiperWrapper";
import { useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import AutoFitText from "../shared/autoFillText/AutoFillText";

const PortfolioCard = ({ data }) => {
    const router = useRouter();
    const locale = useLocale();

    const handleProjectClick = () => {
        router.push(`/${locale}/projects/${data._id}`);
    };

    if (!data?.title || !data?.title[locale]) return null;

    return (
        <div className="relative h-[402px] lg:h-[418px] flex flex-col rounded-[20px] overflow-hidden">
            {data.mainImage?.asset?.url && (
                <Image
                    src={data.mainImage.asset.url}
                    alt={data.title[locale]}
                    width={387}
                    height={247}
                    className="h-[247px] w-[310px] md:w-[345px] lg:w-[387px] object-cover flex-shrink-0"
                />
            )}
            <div className="flex flex-col justify-between w-[310px] md:w-[345px] lg:w-[387px] rounded-b-[20px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-7 pl-6 pr-10 flex-1">
                <div className="h-[48px] mb-4">
                    <AutoFitText
                        as="h3"
                        min={12}
                        max={20}
                        maxHeight={48}
                        className="font-arsenal font-normal text-primary-white leading-[19px] uppercase lg:w-[246px]"
                    >
                        {data.title[locale]}
                    </AutoFitText>
                </div>
                <p className="font-montserrat font-light text-xs lg:text-sm text-primary-white line-clamp-3">
                    {data.subtitle[locale]}
                </p>
            </div>
            <ArrowDiagonalButton
                onClick={handleProjectClick}
                variant="white"
                className="top-[217px] md:top-[220px] right-[24px]"
            />
        </div>
    );
};

const PortfolioSection = ({ portfolioData }) => {
    const t = useTranslations();
    const router = useRouter();
    const locale = useLocale();

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);
    const cardsRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const isDescriptionInView = useInView(descriptionRef, {
        once: true,
        margin: "-100px",
    });
    const isButtonInView = useInView(buttonRef, {
        once: true,
        margin: "-100px",
    });
    const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

    const handlePortfolioClick = () => {
        router.push(`/${locale}/portfolio`);
    };

    if (!portfolioData || portfolioData.length === 0) return null;

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
                            isTitleInView
                                ? { x: 0, opacity: 1 }
                                : { x: -100, opacity: 0 }
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
                    <motion.div
                        ref={buttonRef}
                        initial={{ opacity: 0 }}
                        animate={
                            isButtonInView ? { opacity: 1 } : { opacity: 0 }
                        }
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                            delay: 0.1,
                        }}
                    >
                        <button
                            onClick={handlePortfolioClick}
                            className="w-[310px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-normal text-sm mx-auto leading-5 block md:mb-0 md:order-2 lg:w-[258px] hover:bg-transparent hover:text-primary-white hover:border-primary-white border transition-all duration-300"
                        >
                            {t("portfolioSection.button")}
                        </button>
                    </motion.div>
                </div>
                <motion.div
                    ref={cardsRef}
                    initial={{ y: 100, opacity: 0 }}
                    animate={
                        isCardsInView
                            ? { y: 0, opacity: 1 }
                            : { y: 100, opacity: 0 }
                    }
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h-[402px] lg:h-[418px]"
                >
                    <SwiperWrapper
                        uniqueKey="portfolio-section"
                        swiperClassName="h-full"
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
                        additionalOptions={{
                            spaceBetween: 20,
                            observer: true,
                            observeParents: true,
                        }}
                        buttonVariant="portfolio"
                        customPrevIcon={{ white: arrowWhite, black: arrowBlack }}
                        customNextIcon={{ white: arrowWhite, black: arrowBlack }}
                        buttonsPosition="center"
                        buttonsVisibilityClass="lg:hidden"
                        buttonsClassName="mt-6"
                    >
                        {portfolioData.map((project, index) => (
                            <SwiperSlide
                                key={project._id || index}
                                className="h-full"
                            >
                                <PortfolioCard data={project} />
                            </SwiperSlide>
                        ))}
                    </SwiperWrapper>
                </motion.div>
            </Container>
        </div>
    );
};

export default PortfolioSection;
