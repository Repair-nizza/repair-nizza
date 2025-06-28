"use client";

import React from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations, useLocale } from "next-intl";
import tree from "../../../public/images/image/project-page/review-tree.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ClientReview = ({ data }) => {
  const t = useTranslations("projectPage");
  const locale = useLocale();

  const titleRef = useRef(null);
  const blockRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isBlockInView = useInView(blockRef, { once: true, margin: "-100px" });

  if (!data) return null;

  return (
    <Container className="pb-[160px] lg:pb-[150px] relative z-10">
      <motion.h2
        ref={titleRef}
        initial={{ y: 60, opacity: 0 }}
        animate={isTitleInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-arsenal font-normal text-right text-[32px] leading-[39px] md:text-[32px] lg:text-[48px] lg:leading-[58px] text-primary-black uppercase mb-10 lg:mb-9"
      >
        {t("clientReviewTitle")}
      </motion.h2>
      <motion.div
        ref={blockRef}
        initial={{ y: 60, opacity: 0 }}
        animate={isBlockInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="relative w-full h-[402px] md:h-[400px] lg:h-[318px] rounded-[20px] lg:rounded-[12px] overflow-hidden"
      >
        {data.roomPhoto?.asset?.url && (
          <Image
            src={data.roomPhoto.asset.url}
            alt="Room background"
            fill
            className="object-cover object-bottom lg:object-bottom"
            sizes="(max-width: 768px) 310px, (max-width: 1024px) 400px, 1200px"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 py-6 pl-[25px] pr-[40px] h-[205px] md:w-[350px] lg:w-[501px] lg:py-[58px] lg:pl-[50px] lg:pr-[90px] md:h-full backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]">
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-4 mb-3 md:mb-5 lg:gap-6 lg:mb-[28px]">
              {data.clientPhoto?.asset?.url && (
                <div className="relative w-[40px] h-[40px] lg:w-[68px] lg:h-[68px] rounded-full overflow-hidden">
                  <Image
                    src={data.clientPhoto.asset.url}
                    alt={data.clientName?.[locale] || data.clientName?.en}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40px, 120px"
                  />
                </div>
              )}
              <h3 className="font-arsenal font-normal text-base lg:text-[32px] leading-[19px] lg:leading-[38px] text-primary-white uppercase">
                {data.clientName?.[locale] || data.clientName?.en}
              </h3>
            </div>
            <p className="font-montserrat font-light text-xs text-primary-white leading-[15px] lg:text-base lg:leading-[19px]">
              {data.text?.[locale]?.[0]?.children?.[0]?.text ||
                data.text?.en?.[0]?.children?.[0]?.text}
            </p>
          </div>
        </div>
      </motion.div>
      <Image
        src={tree}
        alt="tree"
        className="absolute bottom-0 right-0 -z-10 lg:hidden"
        width={200}
        height={200}
      />
      <Image
        src={tree}
        alt="tree"
        className="absolute top-[-93px] left-[270px] -z-10 rotate-180 lg:block hidden"
        width={250}
        height={250}
      />
    </Container>
  );
};

export default ClientReview;
