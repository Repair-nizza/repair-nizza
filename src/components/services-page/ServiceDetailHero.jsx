"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import linesTitle from "../../../public/images/image/service-slug-page/lines-title.webp";
import ServiceGallery from "./ServiceGallery";

const ServiceDetailHero = ({ service }) => {
  const t = useTranslations();
  const locale = useLocale();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isDescriptionInView = useInView(descriptionRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "200px" });

  const title = service?.title?.[locale] || service?.title?.en || service?.title?.ru || service?.title || "";
  const description = service?.shortDescription?.[locale] || service?.shortDescription?.en || service?.shortDescription?.ru || "";
  const imageUrl = service.gallery && service.gallery[0]?.asset?.url;

  const getFullDescription = () => {
    const blockContent = service?.fullDescription?.[locale] || service?.fullDescription?.en || service?.fullDescription?.ru;
    if (!blockContent) return "";
    
    return blockContent
      .map((block) => block.children?.map((child) => child.text).join("") || "")
      .join(" ");
  };

  return (
    <>
      {title && (
        <div className="relative mt-[31px] mb-4 lg:hidden">
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

      <div className="relative hidden lg:block">
        <div className="flex w-full max-w-[1440px] mx-auto items-end pt-[15px] pb-[221px] space-between">
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
            {getFullDescription() ? (
              <motion.div
                ref={descriptionRef}
                initial={{ y: 20, opacity: 0 }}
                animate={isDescriptionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className="font-montserrat font-light text-[16px] leading-[125%] max-w-[484px] whitespace-pre-line"
              >
                {getFullDescription()}
              </motion.div>
            ) : null}
          </div>
          <div className="flex-shrink-0 relative">
            <ServiceGallery service={service} />
          </div>
        </div>
        <motion.div
            ref={imageRef}
            initial={{ opacity: 0 }}
            animate={isImageInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="absolute bottom-[-414px] -z-10 right-[-167px] pointer-events-none"
        >
          <Image
            src={linesTitle}
            alt="decoration"
            width={1408.62}
            height={1071.51}
            className="pointer-events-none scale-81"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ServiceDetailHero;

