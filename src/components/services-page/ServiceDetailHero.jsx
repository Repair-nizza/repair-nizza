"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import heroDecor from "../../../public/images/image/services/hero-decor.png";

const ServiceDetailHero = ({ service }) => {
  const t = useTranslations();
  const locale = useLocale();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isDescriptionInView = useInView(descriptionRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const title = service.title?.[locale] || service.title?.en || service.title?.ru || "";
  const description = service.shortDescription?.[locale] || service.shortDescription?.en || service.shortDescription?.ru || "";
  // Use first image from gallery
  const imageUrl = service.gallery && service.gallery[0]?.asset?.url;

  return (
    <>
      {/* Mobile Version */}
      <div className="relative pt-[72px] pb-12 md:hidden">
        <Image
          src={heroDecor}
          alt="decoration"
          className="absolute top-0 right-0 -z-10"
        />
        {imageUrl && (
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full h-[402px] mb-6 rounded-[20px] overflow-hidden"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
        )}
        <motion.h1
          ref={titleRef}
          initial={{ x: -100, opacity: 0 }}
          animate={isTitleInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-arsenal font-normal text-4xl text-primary-black text-center uppercase mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          ref={descriptionRef}
          initial={{ y: 20, opacity: 0 }}
          animate={isDescriptionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="font-montserrat font-light text-sm text-primary-black text-center px-4"
        >
          {description}
        </motion.p>
      </div>

      {/* Desktop Version - Styled as Service Card */}
      <div className="relative hidden md:block">
        <Image
          src={heroDecor}
          alt="decoration"
          className="absolute top-0 right-0 -z-10"
        />
        <div className="flex w-full max-w-[1440px] mx-auto items-end pt-[100px] pb-20">
          <div className="relative w-[845px] h-[643px] flex-shrink-0">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="rounded-[20px] object-cover"
              />
            )}
          </div>
          <div className="flex-1 flex flex-col justify-end pb-6 pl-8">
            <motion.h1
              ref={titleRef}
              initial={{ x: -100, opacity: 0 }}
              animate={isTitleInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-arsenal font-normal text-3xl text-primary-black uppercase mb-4"
            >
              {title}
            </motion.h1>
            <motion.p
              ref={descriptionRef}
              initial={{ y: 20, opacity: 0 }}
              animate={isDescriptionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="font-montserrat font-light text-base text-primary-black leading-[19px] mb-6 max-w-[500px]"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailHero;

