"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useLocale } from "next-intl";

const ServiceGallery = ({ service }) => {
  const locale = useLocale();
  const galleryRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  const galleryImages = service?.gallery || [];

  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (galleryImages.length <= 5) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const getDisplayCards = () => {
    if (galleryImages.length <= 5) {
      const classNames = ["left-card", "center-card", "right-card", "fourth-card", "fifth-card"];
      return galleryImages.map((img, idx) => ({
        image: img,
        index: idx,
        className: classNames[idx] || "gallery-card",
      }));
    }

    const cards = [];
    const classNames = ["left-card", "center-card", "right-card", "fourth-card", "fifth-card"];
    for (let i = 0; i < 5; i++) {
      const imgIndex = (currentIndex + i) % galleryImages.length;
      cards.push({
        image: galleryImages[imgIndex],
        index: imgIndex,
        className: classNames[i] || "gallery-card",
      });
    }
    return cards;
  };

  const displayCards = getDisplayCards();

  return (
    <motion.div
      ref={galleryRef}
      initial={{ y: 50, opacity: 0 }}
      animate={isGalleryInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-20 lg:mb-0"
    >
      <div className="relative w-full flex justify-center pr-[60px] lg:pr-0" style={{ overflowX: 'visible' }}>
        <div className="relative w-[310px] h-[207px] md:w-[400px] md:h-[267px] lg:w-[605px] lg:h-[343px]" style={{ overflow: 'visible' }}>
          <div className="gallery-card-stack relative z-10">
            {displayCards.map((card, idx) => {
              const imageUrl = card.image?.image?.asset?.url || card.image?.asset?.url;
              if (!imageUrl) return null;

              const imageId = card.image?.image?.asset?._id || card.image?.asset?._id || card.index;

              return (
                <div
                  key={`gallery-${imageId}-${idx}-${currentIndex}`}
                  className={`gallery-card-item ${card.className}`}
                >
                  <div className="relative w-[295px] h-[193px] md:w-[400px] md:h-[267px] lg:w-[605px] lg:h-[343px] rounded-md lg:rounded-xl overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={`Gallery image ${card.index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 310px, (max-width: 1024px) 400px, 605px"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceGallery;
