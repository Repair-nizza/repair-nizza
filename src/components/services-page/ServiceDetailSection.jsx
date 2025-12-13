"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import ServiceCard from "./ServiceCard";
import Container from "../Container";

const ServiceDetailSection = ({ service, allServices }) => {
  const locale = useLocale();
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const otherServices = allServices?.filter(s => s._id !== service._id) || [];
  const imageUrl = service.image2?.asset?.url;

  return (
    <Container className="relative">
      <div ref={sectionRef} className="pt-12 pb-20 md:pt-16 lg:pt-20">
        <div className="lg:flex lg:gap-[118px] lg:items-start">
          {imageUrl && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isSectionInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
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

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isSectionInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex-1"
          >
            <div className="flex flex-col gap-[26px] md:gap-[26px] lg:gap-12">
              {otherServices.map((serviceItem, index) => (
                <motion.div
                  key={serviceItem._id}
                  initial={{ y: 100, opacity: 0 }}
                  animate={
                    isSectionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                  }
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <ServiceCard service={serviceItem} index={index} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetailSection;

