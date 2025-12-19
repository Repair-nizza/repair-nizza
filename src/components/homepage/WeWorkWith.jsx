"use client";

import MarqueeLine from "../shared/marquee/MarqueeLine";
import Container from "../Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import linesMob from "../../../public/images/image/marquee/linesMob.webp";
import linesDesk from "../../../public/images/image/marquee/linesDesk.webp";
import leavesMob from "../../../public/images/image/marquee/leavesMob.webp";
import leavesDesk from "../../../public/images/image/marquee/leavesDesk.webp";

export default function WeWorkWith() {
    const t = useTranslations("weWorkWith");

    const titleRef = useRef(null);
    const linesMobRef = useRef(null);
    const linesDeskRef = useRef(null);
    const leavesMobRef = useRef(null);
    const leavesDeskRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const isLinesMobInView = useInView(linesMobRef, {
        once: true,
        margin: "-100px",
    });
    const isLinesDeskInView = useInView(linesDeskRef, {
        once: true,
        margin: "-100px",
    });
    const isLeavesMobInView = useInView(leavesMobRef, {
        once: true,
        margin: "-100px",
    });
    const isLeavesDeskInView = useInView(leavesDeskRef, {
        once: true,
        margin: "-100px",
    });

    return (
        <section className="relative pb-[104px] lg:pb-[56px]">
            <motion.div
                ref={linesMobRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                    isLinesMobInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute top-[-58px] left-1/2 -translate-x-1/2 -z-20 lg:hidden w-[640px] h-[412px]"
            >
                <Image
                    src={linesMob}
                    alt="linesMob"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </motion.div>
            <motion.div
                ref={linesDeskRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                    isLinesDeskInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute top-[-184px] left-[50%] -z-20 lg:block hidden w-[1016px] h-[625px]"
            >
                <Image
                    src={linesDesk}
                    alt="linesDesk"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </motion.div>
            <motion.div
                ref={leavesMobRef}
                initial={{ opacity: 0, y: 50 }}
                animate={
                    isLeavesMobInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-[-50px] left-[50%] -z-20 lg:hidden"
            >
                <Image
                    src={leavesMob}
                    alt="leavesMob"
                    width={210}
                    height={210}
                    loading="lazy"
                />
            </motion.div>
            <motion.div
                ref={leavesDeskRef}
                initial={{ opacity: 0, x: 50 }}
                animate={
                    isLeavesDeskInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="absolute top-0 right-[45%] -z-20 lg:block hidden"
            >
                <Image
                    src={leavesDesk}
                    alt="leavesDesk"
                    width={316}
                    loading="lazy"
                />
            </motion.div>
            <Container className="pt-[114px] lg:pt-[124px] pb-[44px] lg:pb-[41px]">
                <motion.h2
                    ref={titleRef}
                    initial={{ y: 50, opacity: 0 }}
                    animate={
                        isTitleInView
                            ? { y: 0, opacity: 1 }
                            : { y: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="font-arsenal text-[32px] md:text-[64px] text-primary-black uppercase leading-[125%]"
                >
                    {t("title")}
                </motion.h2>
            </Container>
            <MarqueeLine />
        </section>
    );
}
