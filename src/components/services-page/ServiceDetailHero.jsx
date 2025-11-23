"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import heroDecor from "../../../public/images/image/services/hero-decor.png";
import ServiceGallery from "./ServiceGallery";

const ServiceDetailHero = ({ service }) => {
  const t = useTranslations();
  const locale = useLocale();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isDescriptionInView = useInView(descriptionRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const title = service?.title?.[locale] || service?.title?.en || service?.title?.ru || service?.title || "";
  const description = service?.shortDescription?.[locale] || service?.shortDescription?.en || service?.shortDescription?.ru || "";
  // Use first image from gallery
  const imageUrl = service.gallery && service.gallery[0]?.asset?.url;

  return (
    <>
      {/* Mobile Version - Title only */}
      {title && (
        <div className="relative mt-[31px] mb-4 md:hidden">
          <motion.h1
            ref={titleRef}
            initial={{ x: -100, opacity: 0 }}
            animate={isTitleInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-arsenal text-[32px] leading-[125%] uppercase"
          >
            {title}
          </motion.h1>
        </div>
      )}

      {/* Desktop Version - Title/Description left, Gallery right */}
      <div className="relative hidden lg:block">
        <div className="flex w-full max-w-[1440px] mx-auto items-end pt-[15px] pb-[221px] space-between">
          {/* Left: Title and Description in column */}
          <div className="flex-1 flex flex-col">
            {title && (
              <motion.h1
                ref={titleRef}
                initial={{ x: -100, opacity: 0 }}
                animate={isTitleInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-arsenal text-[40px] leading-[120%] uppercase mb-5"
              >
                {title}
              </motion.h1>
            )}
            {/* Full Description on Desktop */}
            {service?.fullDescription?.[locale] || service?.fullDescription?.en || service?.fullDescription?.ru ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isDescriptionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className="font-montserrat font-light text-[16px] leading-[125%] max-w-[484px] whitespace-pre-line"
              >
                {service.fullDescription?.[locale] || service.fullDescription?.en || service.fullDescription?.ru}
              </motion.div>
            ) : null}
          </div>
          {/* Right: Gallery */}
          <div className="flex-shrink-0">
            <ServiceGallery service={service} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailHero;

