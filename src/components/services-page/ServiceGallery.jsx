"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useLocale } from "next-intl";

const ServiceGallery = ({ service }) => {
  const locale = useLocale();
  const galleryRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  // Get gallery images from service
  const galleryImages = service?.gallery || [];

  // Don't render if no gallery images
  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  // Prepare cards for stacking - show 3 at a time, cycle through all images
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (galleryImages.length <= 3) return; // No need to cycle if 3 or fewer images
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000); // Change every 5 seconds (matches animation cycle)

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Get the 3 cards to display (cycling through all images)
  const getDisplayCards = () => {
    if (galleryImages.length <= 3) {
      return galleryImages.map((img, idx) => ({
        image: img,
        index: idx,
        className: idx === 0 ? "left-card" : idx === 1 ? "center-card" : "right-card",
      }));
    }

    // Cycle through images
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const imgIndex = (currentIndex + i) % galleryImages.length;
      cards.push({
        image: galleryImages[imgIndex],
        index: imgIndex,
        className: i === 0 ? "left-card" : i === 1 ? "center-card" : "right-card",
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
      {/* Horizontal Stacked Gallery Container */}
      <div className="relative w-full flex justify-center pr-[60px] lg:pr-0" style={{ overflowX: 'visible' }}>
        <div className="relative w-[310px] h-[207px] md:w-[400px] md:h-[267px] lg:w-[605px] lg:h-[343px]" style={{ overflow: 'visible' }}>
          <div className="gallery-card-stack relative z-10">
            {displayCards.map((card, idx) => {
              const imageUrl = card.image?.asset?.url;
              if (!imageUrl) return null;

              return (
                <div
                  key={`gallery-${card.image.asset._id || card.index}-${idx}-${currentIndex}`}
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
