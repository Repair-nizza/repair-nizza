"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AutoFitText from "../shared/autoFillText/AutoFillText";

const ProjectHero = ({ data }) => {
    const locale = useLocale();

    const mobileBlurRef = useRef(null);
    const desktopBlurRef = useRef(null);
    const isMobileBlurInView = useInView(mobileBlurRef, {
        once: true,
        margin: "-100px",
    });
    const isDesktopBlurInView = useInView(desktopBlurRef, {
        once: true,
        margin: "-100px",
    });

    if (!data?.mobileMainImage?.asset?.url || !data?.mainImage?.asset?.url) {
        return null;
    }

    return (
        <div className="relative w-full">
            {/* Mobile Image with Blur Card */}
            <div className="md:hidden relative w-full">
                <div className="w-full">
                    <Image
                        src={data.mobileMainImage.asset.url}
                        alt={data.title?.[locale] || "Project image"}
                        width={310}
                        height={660}
                        className="w-full h-[660px] object-cover rounded-t-[28px]"
                        priority
                    />
                </div>
                <motion.div
                    ref={mobileBlurRef}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isMobileBlurInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col justify-center absolute bottom-0 left-0 right-0 w-full py-8 px-6 backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isMobileBlurInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <AutoFitText
                            as="h3"
                            min={16}
                            max={36}
                            className="font-arsenal font-normal text-primary-white max-h-[50%] mb-5 leading-[43px] uppercase text-center"
                        >
                            {data.title?.[locale]}
                        </AutoFitText>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isMobileBlurInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="font-montserrat font-light text-base text-primary-white text-center w-[282px] mx-auto leading-5"
                    >
                        {data.subtitle?.[locale]}
                    </motion.p>
                </motion.div>
            </div>

            {/* Desktop Image */}
            <div className="hidden md:block relative">
                <Image
                    src={data.mainImage.asset.url}
                    alt={data.title?.[locale] || "Project image"}
                    width={1440}
                    height={453}
                    className="w-full h-[453px] object-cover rounded-t-[20px]"
                    priority
                />
                <motion.div
                    ref={desktopBlurRef}
                    initial={{ x: -100, opacity: 0 }}
                    animate={isDesktopBlurInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="rounded-tl-[20px] flex flex-col justify-center items-center absolute top-0 left-0 w-1/2 lg:w-[679px] h-full backdrop-blur-[13px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-[60px] pl-10 pr-[45px]"
                >
                    <div className="flex flex-col justify-center mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={
                                isDesktopBlurInView ? { opacity: 1, x: 0 } : {}
                            }
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <AutoFitText
                                as="h3"
                                min={16}
                                max={83}
                                className="font-arsenal font-normal leading-[120%] max-h-[200px] text-primary-white mb-5 uppercase"
                            >
                                {data.title?.[locale]}
                            </AutoFitText>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={
                                isDesktopBlurInView ? { opacity: 1, x: 0 } : {}
                            }
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="font-montserrat font-light text-base text-primary-white leading-[19px] "
                        >
                            {data.subtitle?.[locale]}
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectHero;
