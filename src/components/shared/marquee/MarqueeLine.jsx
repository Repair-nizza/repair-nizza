"use client";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { headerVariants } from "@/utils/animationVariants";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function MarqueeLine() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={headerVariants}
        >
            <Marquee
                autoFill={true}
                speed={70}
                className={twMerge(
                    clsx(
                        `h-[42px] lg:h-[76px] border-y lg:border-y-2 text-[17px] lg:text-[30px] leading-none ${
                            variant === "green"
                                ? "text-green border-green"
                                : variant === "light-green"
                                ? "text-green-light-2 border-green-light-2"
                                : "text-green border-green"
                        }`,
                        className
                    )
                )}
            >
                <span className="inline-block mx-[7.15px] lg:mx-[13px]">
                    efedra
                </span>
                <span className="inline-block mx-[7.15px] lg:mx-[13px]">
                    efedra
                </span>
                <span className="inline-block mx-[7.15px] lg:mx-[13px]">
                    efedra
                </span>
            </Marquee>
        </motion.div>
    );
}
