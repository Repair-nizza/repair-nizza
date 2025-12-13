"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import Container from "../Container";
import serviceMotif from "../../../public/images/image/service-motif-test.png";
import serviceMotif2 from "../../../public/images/image/services/lines-bot-mobile.png";
import serviceMotif2Desktop from "../../../public/images/image/services/lines-bot-desk.png";

const ServiceListSection = ({ services }) => {
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  if (!services || services.length === 0) {
    return (
      <Container>
        <div className="py-12 text-center">
          <p className="font-montserrat font-light text-base text-gray-500">
            No services found.
          </p>
        </div>
      </Container>
    );
  }

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isCardsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="hidden md:block absolute -z-10 pointer-events-none"
        style={{
          top: "-60px",
          left: "-510px",
        }}
      >
        <Image
          src={serviceMotif}
          alt="service motif"
          className="lg:block hidden"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isCardsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="hidden md:block absolute -z-10 pointer-events-none"
        style={{
          top: "0px",
          left: "-140px",
        }}
      >
        <Image
          src={serviceMotif}
          alt="service motif"
          className="md:block lg:hidden"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isCardsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="lg:hidden absolute pointer-events-none"
        style={{
          bottom: "-44px",
          right: "-25px",
        }}
      >
        <Image
          src={serviceMotif2}
          alt="service motif bottom"
          className="lg:hidden"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isCardsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:block absolute pointer-events-none"
        style={{
          bottom: "-44px",
          right: "-25px",
        }}
      >
        <Image
          src={serviceMotif2Desktop}
          alt="service motif bottom desktop"
          className="hidden lg:block"
          width={483}
            height={693}
        />
      </motion.div>

      <motion.div
        ref={cardsRef}
        initial={{ y: 100, opacity: 0 }}
        animate={isCardsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-[24px] md:gap-[24px] lg:gap-10 pb-[97px]"
      >
        {services.map((service, index) => (
          <motion.div
            key={service._id}
            initial={{ y: 100, opacity: 0 }}
            animate={
              isCardsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
            }
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceListSection;

