"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";
import Container from "../Container";

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
    <Container>
      <motion.div
        ref={cardsRef}
        initial={{ y: 100, opacity: 0 }}
        animate={isCardsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-[26px] mb-10 md:gap-[26px] lg:gap-12 pb-20"
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
    </Container>
  );
};

export default ServiceListSection;

