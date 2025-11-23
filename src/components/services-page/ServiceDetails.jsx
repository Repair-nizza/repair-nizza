"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import plus from "../../../public/images/SVG/icon-plus.svg";
import minus from "../../../public/images/SVG/icon-minus.svg";

const ServiceDetails = ({ service }) => {
  const locale = useLocale();
  const t = useTranslations("serviceDetailPage");
  const detailsRef = useRef(null);
  const isDetailsInView = useInView(detailsRef, { once: true, margin: "-100px" });

  const [openCards, setOpenCards] = useState({
    process: false,
    pros: false,
    additionalInfo: false,
  });

  const fullDescription = service.fullDescription?.[locale] || service.fullDescription?.en || service.fullDescription?.ru || "";
  const process = service.process?.[locale] || service.process?.en || service.process?.ru || "";
  const pros = service.pros?.[locale] || service.pros?.en || service.pros?.ru || "";
  const additionalInfo = service.additionalInfo?.[locale] || service.additionalInfo?.en || service.additionalInfo?.ru || "";
  // Use infoImage
  const imageUrl = service.infoImage?.asset?.url;

  const toggleCard = (cardName) => {
    setOpenCards((prev) => {
      if (!prev[cardName]) {
        return {
          process: false,
          pros: false,
          additionalInfo: false,
          [cardName]: true,
        };
      } else {
        return {
          ...prev,
          [cardName]: false,
        };
      }
    });
  };

  if (!fullDescription && !process && !pros && !additionalInfo) {
    return null;
  }

  return (
    <div ref={detailsRef} className="py-12 md:py-16 lg:py-20">
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
        {fullDescription && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isDetailsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="font-montserrat font-light text-sm md:text-base lg:text-base text-primary-black leading-relaxed whitespace-pre-line">
              {fullDescription}
            </div>
          </motion.div>
        )}

        {(process || pros || additionalInfo) && (
          <div className="lg:flex lg:gap-[118px] lg:items-start">
            {/* Image on the left - Desktop only */}
            {imageUrl && (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isDetailsInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="mb-10 lg:mb-0 lg:flex-shrink-0"
              >
                <div className="relative w-full h-[295px] md:h-[400px] lg:w-[488px] lg:h-[518px]">
                  <Image
                    src={imageUrl}
                    alt={service.title?.[locale] || service.title?.en || service.title?.ru || ""}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </motion.div>
            )}

            {/* Cards on the right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isDetailsInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="flex-1"
            >
              {process && (
                <div className="mb-7 lg:mb-10">
                  <div
                    className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer lg:w-[590px] lg:mb-6"
                    onClick={() => toggleCard("process")}
                  >
                    <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase lg:text-[32px]">
                      {t("process")}
                    </h3>
                    <Image
                      src={openCards.process ? minus : plus}
                      alt={openCards.process ? "icon minus" : "icon plus"}
                      className="transition-transform duration-300 lg:w-[32px] lg:h-[32px]"
                      style={{
                        transform: openCards.process
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      }}
                    />
                  </div>
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openCards.process ? "1000px" : "0",
                      opacity: openCards.process ? 1 : 0,
                    }}
                  >
                    <p className="font-montserrat font-light text-xs text-primary-black md:w-[300px] lg:w-[530px] lg:text-sm whitespace-pre-line">
                      {process}
                    </p>
                  </div>
                </div>
              )}

              {pros && (
                <div className="mb-7 lg:mb-10">
                  <div
                    className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer lg:w-[590px] lg:mb-6"
                    onClick={() => toggleCard("pros")}
                  >
                    <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase lg:text-[32px]">
                      {t("pros")}
                    </h3>
                    <Image
                      src={openCards.pros ? minus : plus}
                      alt={openCards.pros ? "icon minus" : "icon plus"}
                      className="transition-transform duration-300 lg:w-[32px] lg:h-[32px]"
                      style={{
                        transform: openCards.pros
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      }}
                    />
                  </div>
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openCards.pros ? "1000px" : "0",
                      opacity: openCards.pros ? 1 : 0,
                    }}
                  >
                    <p className="font-montserrat font-light text-xs text-primary-black md:w-[300px] lg:w-[530px] lg:text-sm whitespace-pre-line">
                      {pros}
                    </p>
                  </div>
                </div>
              )}

              {additionalInfo && (
                <div>
                  <div
                    className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer lg:w-[590px] lg:mb-6"
                    onClick={() => toggleCard("additionalInfo")}
                  >
                    <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase lg:text-[32px]">
                      {t("additionalInfo")}
                    </h3>
                    <Image
                      src={openCards.additionalInfo ? minus : plus}
                      alt={openCards.additionalInfo ? "icon minus" : "icon plus"}
                      className="transition-transform duration-300 lg:w-[32px] lg:h-[32px]"
                      style={{
                        transform: openCards.additionalInfo
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      }}
                    />
                  </div>
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openCards.additionalInfo ? "1000px" : "0",
                      opacity: openCards.additionalInfo ? 1 : 0,
                    }}
                  >
                    <p className="font-montserrat font-light text-xs text-primary-black md:w-[300px] lg:w-[530px] lg:text-sm whitespace-pre-line">
                      {additionalInfo}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;

