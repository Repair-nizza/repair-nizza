"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import Container from "../Container";
import BlogGallery from "./BlogGallery";
import leavesBotMob from "../../../public/images/image/blog-page/leavesBotMob.png";
import leavesTopMob from "../../../public/images/image/blog-page/leavesTopMob.png";
import leavesBotDesk from "../../../public/images/image/blog-page/leavesBotDesk.png";
import leavesTopDesk from "../../../public/images/image/blog-page/leavesTopDesk.png";
import linesDesk from "../../../public/images/image/blog-page/linesTopDesk.png";

const BlogContent = ({ content, gallery }) => {
    const locale = useLocale();

    const getBlockText = blockContent => {
        if (!blockContent?.[locale]) return "";
        return blockContent[locale]
            .map(
                block => block.children?.map(child => child.text).join("") || ""
            )
            .join(" ");
    };

    const contentRef = useRef(null);
    const isContentInView = useInView(contentRef, {
        once: true,
        margin: "-100px",
    });

    if (
        (!content || content.length === 0) &&
        (!gallery || gallery.length === 0)
    )
        return null;

    return (
        <div className="relative pt-[116px] pb-[100px] lg:pt-[100px]">
            <Image
                src={leavesTopMob}
                alt="leaves image"
                width={268}
                height={268}
                className="absolute lg:hidden w-auto h-[268px] top-[-127px] left-[10px] scale-110% -z-10"
            />
            <Image
                src={leavesBotMob}
                alt="leaves image"
                width={243}
                height={243}
                className="absolute lg:hidden w-auto h-[243px] bottom-[-124px] scale-120% -z-10"
            />
            <Image
                src={leavesTopDesk}
                alt="leaves image"
                width={382}
                height={382}
                className="absolute hidden lg:block w-auto h-[382px] top-[-255px] left-[6px] scale-110% -z-10"
            />
            <Container className="relative">
                <Image
                    src={linesDesk}
                    alt="lines image"
                    width={922}
                    height={360}
                    className="absolute hidden lg:block top-[-263px] right-[-185px] -z-10"
                />
                <motion.div
                    ref={contentRef}
                    initial={{ y: 50, opacity: 0 }}
                    animate={isContentInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="p-4 relative z-10"
                >
                    {content.map((block, index) => {
                        // Title and Text Block
                        if (block._type === "titleText") {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={
                                        isContentInView
                                            ? { y: 0, opacity: 1 }
                                            : {}
                                    }
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.6,
                                    }}
                                    className="space-y-5 mb-[61px]"
                                >
                                    {block.title?.[locale] && (
                                        <h3 className="font-arsenal font-normal text-[24px] leading-[120%] lg:text-[40px] text-primary-black uppercase">
                                            {block.title[locale]}
                                        </h3>
                                    )}
                                    {block.description && (
                                        <div className="font-montserrat font-light text-[16px] leading-[120%] text-primary-black whitespace-pre-line">
                                            {getBlockText(block.description)}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        }

                        // List Block
                        if (block._type === "listBlock") {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={
                                        isContentInView
                                            ? { y: 0, opacity: 1 }
                                            : {}
                                    }
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.6,
                                    }}
                                    className="space-y-5"
                                >
                                    {block.items && block.items.length > 0 && (
                                        <ul className="[counter-reset:step]">
                                            {block.items.map(
                                                (item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="relative [counter-increment:step] mb-[52px] lg:mb-5"
                                                    >
                                                        {item.title?.[
                                                            locale
                                                        ] && (
                                                            <div className="mb-5">
                                                                <span className="inline font-arsenal font-normal text-[24px] leading-[120%] text-primary-black mr-2">
                                                                    {itemIndex +
                                                                        1}
                                                                    .
                                                                </span>
                                                                <h3 className="inline font-arsenal font-normal text-[24px] leading-[120%] text-primary-black">
                                                                    {
                                                                        item
                                                                            .title[
                                                                            locale
                                                                        ]
                                                                    }
                                                                </h3>
                                                            </div>
                                                        )}
                                                        {item.description && (
                                                            <div className="font-montserrat font-light text-[16px] leading-[120%] text-primary-black whitespace-pre-line">
                                                                {getBlockText(
                                                                    item.description
                                                                )}
                                                            </div>
                                                        )}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </motion.div>
                            );
                        }

                        // Conclusion Block
                        if (block._type === "conclusionBlock") {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={
                                        isContentInView
                                            ? { y: 0, opacity: 1 }
                                            : {}
                                    }
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.6,
                                    }}
                                >
                                    {block.title?.[locale] && (
                                        <h3 className="font-arsenal font-normal text-[24px] leading-[120%] text-primary-black uppercase mb-5">
                                            {block.title[locale]}
                                        </h3>
                                    )}
                                    {block.description && (
                                        <div className="font-montserrat font-light text-[16px] leading-[120%] text-primary-black whitespace-pre-line">
                                            {getBlockText(block.description)}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        }

                        return null;
                    })}

                    {gallery && gallery.length > 0 && (
                        <div className="mt-[100px] lg:mt-[171px]">
                            <BlogGallery gallery={gallery} />
                        </div>
                    )}
                </motion.div>
            </Container>
        </div>
    );
};

export default BlogContent;
