"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Container from "../../Container";
import telegramIcon from "../../../../public/images/SVG/telegram-outline.svg";
import bgMob from "../../../../public/images/image/bottomCTA/bgMob.webp";
import bgDesk from "../../../../public/images/image/bottomCTA/bgDesk.webp";

const BottomCTA = () => {
    const t = useTranslations("bottomCTA");
    const ctaRef = useRef(null);
    const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

    const telegramUrl = "https://t.me/soliderenovation";

    return (
        <section
            ref={ctaRef}
            className="relative h-[560px] lg:h-[220px] overflow-hidden flex items-center justify-center"
        >
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={bgMob}
                    alt="background"
                    fill
                    className="object-cover lg:hidden"
                    sizes="100vw"
                    priority
                />
                <Image
                    src={bgDesk}
                    alt="background"
                    fill
                    className="object-cover hidden lg:block"
                    sizes="100vw"
                    priority
                />
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isCtaInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]"
            >
                <Container className="relative">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-6 px-[13px] py-[41px]">
                        <div className="flex flex-col items-center lg:items-start gap-[14px] text-center lg:text-left">
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={
                                    isCtaInView ? { y: 0, opacity: 1 } : {}
                                }
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                    delay: 0.2,
                                }}
                                className="font-arsenal font-normal text-[32px] text-primary-white uppercase leading-[120%]"
                            >
                                {t("title")}
                            </motion.h2>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={
                                    isCtaInView ? { y: 0, opacity: 1 } : {}
                                }
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                    delay: 0.3,
                                }}
                                className="font-montserrat font-light text-sm lg:text-base text-primary-white leading-relaxed max-w-[600px]"
                            >
                                {t("description")}
                            </motion.p>
                        </div>
                        <motion.a
                            href={telegramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={
                                isCtaInView ? { scale: 1, opacity: 1 } : {}
                            }
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                delay: 0.4,
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-between w-full h-[52px] px-[24px] rounded-full md:max-w-[262px] bg-primary-white text-primary-black text-[14px] hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap"
                        >
                            <span>{t("button")}</span>
                            <Image
                                src={telegramIcon}
                                alt="Telegram"
                                width={20}
                                height={20}
                                className="size-6"
                            />
                        </motion.a>
                    </div>
                </Container>
            </motion.div>
        </section>
    );
};

export default BottomCTA;
