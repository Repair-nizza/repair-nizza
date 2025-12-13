"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import plus from "../../../public/images/SVG/icon-plus.svg";
import minus from "../../../public/images/SVG/icon-minus.svg";
import linesInfo from "../../../public/images/image/service-slug-page/lines-info.png";
import ServiceGallery from "./ServiceGallery";

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

  const getFullDescription = () => {
    const blockContent = service.fullDescription?.[locale] || service.fullDescription?.en || service.fullDescription?.ru;
    if (!blockContent) return "";
    
    return blockContent
      .map((block) => block.children?.map((child) => child.text).join("") || "")
      .join(" ");
  };

  const fullDescription = getFullDescription();
  const process = service.process?.[locale] || service.process?.en || service.process?.ru || "";
  const pros = service.pros?.[locale] || service.pros?.en || service.pros?.ru || "";
  const additionalInfo = service.additionalInfo?.[locale] || service.additionalInfo?.en || service.additionalInfo?.ru || "";
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
    <>
      {fullDescription && (
        <motion.div
          ref={detailsRef}
          initial={{ y: 50, opacity: 0 }}
          animate={isDetailsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4 lg:hidden"
        >
          <div className="font-montserrat font-light text-[12px] leading-[125%] whitespace-pre-line">
            {fullDescription}
          </div>
        </motion.div>
      )}

      <div className="absolute w-[467px] h-[544px] inset-0 top-[350px] left-[25px] -z-10 md:hidden pointer-events-none">
            <Image
              src="/images/image/service-slug-page/lines-title-mob.png"
              alt=""
              fill
              className="object-contain object-center"
              sizes="310px"
              priority={false}
            />
      </div>

      <div className="lg:hidden">
        <ServiceGallery service={service} />
      </div>

      {(process || pros || additionalInfo || imageUrl) && (
        <div ref={detailsRef} className="mb-[50px] lg:mb-[51px] relative">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
            <div className="lg:hidden flex flex-col gap-8">
              {(process || pros || additionalInfo) && (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={isDetailsInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="flex-1"
                >
                  {process && (
                    <div className="mb-7">
                      <div
                        className="flex justify-between items-center mb-[22px] w-full cursor-pointer"
                        onClick={() => toggleCard("process")}
                      >
                        <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase">
                          {t("process")}
                        </h3>
                        <Image
                          src={openCards.process ? minus : plus}
                          alt={openCards.process ? "icon minus" : "icon plus"}
                          className="transition-transform duration-300"
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
                        <p className="font-montserrat font-light text-xs text-primary-black whitespace-pre-line">
                          {process}
                        </p>
                      </div>
                    </div>
                  )}

                  {pros && (
                    <div className="mb-7">
                      <div
                        className="flex justify-between items-center mb-[22px] w-full cursor-pointer"
                        onClick={() => toggleCard("pros")}
                      >
                        <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase">
                          {t("pros")}
                        </h3>
                        <Image
                          src={openCards.pros ? minus : plus}
                          alt={openCards.pros ? "icon minus" : "icon plus"}
                          className="transition-transform duration-300"
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
                        <p className="font-montserrat font-light text-xs text-primary-black whitespace-pre-line">
                          {pros}
                        </p>
                      </div>
                    </div>
                  )}

                  {additionalInfo && (
                    <div className="">
                      <div
                        className="flex justify-between items-center mb-[22px] w-full cursor-pointer"
                        onClick={() => toggleCard("additionalInfo")}
                      >
                        <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase">
                          {t("additionalInfo")}
                        </h3>
                        <Image
                          src={openCards.additionalInfo ? minus : plus}
                          alt={openCards.additionalInfo ? "icon minus" : "icon plus"}
                          className="transition-transform duration-300"
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
                        <p className="font-montserrat font-light text-xs text-primary-black whitespace-pre-line">
                          {additionalInfo}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {imageUrl && (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={isDetailsInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="mb-10 relative"
                >
                  <div className="relative w-full h-[234px] md:h-[400px]">
                    <Image
                      src={imageUrl}
                      alt={service.title?.[locale] || service.title?.en || service.title?.ru || ""}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </div>

            <div className="hidden lg:flex lg:gap-16 lg:items-stretch relative">
              <div className="absolute top-0 left-0 lg:left-[305px] lg:top-[-86px] lg:scale-124 -z-10 -translate-y-20 pointer-events-none">
                <Image
                  src="/images/image/service-slug-page/leaves-info.png"
                  alt="decoration"
                  width={200}
                  height={200}
                  className="h-auto w-auto pointer-events-none"
                />
              </div>
              {imageUrl && (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={isDetailsInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="mb-10 lg:mb-0 lg:flex-shrink-0 relative"
                >
                  <div className="relative w-full h-[295px] md:h-[400px] lg:w-[546px] lg:h-[234px]">
                    <Image
                      src={imageUrl}
                      alt={service.title?.[locale] || service.title?.en || service.title?.ru || ""}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </motion.div>
              )}

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isDetailsInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="flex-1 lg:flex lg:flex-col lg:justify-between lg:h-[234px]"
            >
              {process && (
                <div className="mb-7 lg:mb-0 lg:flex lg:flex-col">
                  <div
                    className={`flex justify-between items-center mb-[22px] w-full cursor-pointer lg:w-[590px] transition-all duration-300 ${
                      openCards.process ? "lg:mb-6" : "lg:mb-0"
                    }`}
                    onClick={() => toggleCard("process")}
                    >
                    <h3 className="font-arsenal text-[32px] leading-[75%] uppercase">
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
                    className="overflow-hidden transition-all duration-300 ease-in-out lg:flex-1"
                    style={{
                      maxHeight: openCards.process ? "1000px" : "0",
                      opacity: openCards.process ? 1 : 0,
                    }}
                  >
                    <p className="font-montserrat font-light text-xs text-primary-black w-full md:w-full lg:w-[530px] lg:text-sm whitespace-pre-line">
                      {process}
                    </p>
                  </div>
                </div>
              )}

              {pros && (
                <div className="mb-7 lg:mb-0 lg:flex lg:flex-col">
                  <div
                    className={`flex justify-between items-center mb-[22px] w-full cursor-pointer lg:w-[590px] transition-all duration-300 ${
                      openCards.pros ? "lg:mb-6" : "lg:mb-0"
                    }`}
                    onClick={() => toggleCard("pros")}
                  >
                    <h3 className="font-arsenal text-[32px] leading-[75%] uppercase">
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
                    className="overflow-hidden transition-all duration-300 ease-in-out lg:flex-1"
                    style={{
                      maxHeight: openCards.pros ? "1000px" : "0",
                      opacity: openCards.pros ? 1 : 0,
                    }}
                  >
                    <p className="font-montserrat font-light text-xs text-primary-black w-full md:w-full lg:w-[530px] lg:text-sm whitespace-pre-line">
                      {pros}
                    </p>
                  </div>
                </div>
              )}

              {additionalInfo && (
                <div className="lg:flex lg:flex-col">
                  <div
                    className={`flex justify-between items-center mb-[22px] w-full cursor-pointer lg:w-[590px] transition-all duration-300 ${
                      openCards.additionalInfo ? "lg:mb-6" : "lg:mb-0"
                    }`}
                    onClick={() => toggleCard("additionalInfo")}
                  >
                    <h3 className="font-arsenal text-[32px] leading-[75%] uppercase">
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
                    className="overflow-hidden transition-all duration-300 ease-in-out lg:flex-1"
                    style={{
                      maxHeight: openCards.additionalInfo ? "1000px" : "0",
                      opacity: openCards.additionalInfo ? 1 : 0,
                    }}
                  >
                    <p className="font-montserrat font-light text-xs text-primary-black w-full md:w-full lg:w-[530px] lg:text-sm whitespace-pre-line">
                      {additionalInfo}
                    </p>
                  </div>
                </div>
              )}
              </motion.div>
              <motion.div
                    initial={{ opacity: 0 }}
                    animate={isDetailsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    className="hidden lg:block -z-10 absolute bottom-[-613px] left-[-126px] scale-85 pointer-events-none"
                  >
                    <Image
                      src={linesInfo}
                      alt="decoration"
                      width={828}
                      height={596}
                      className="pointer-events-none"
                    />
                  </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;

