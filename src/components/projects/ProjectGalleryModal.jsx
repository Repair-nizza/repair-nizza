"use client";

import { useRef, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperWrapper from "../shared/swiper/SwiperWrapper";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import galleryIconBtnDesk from "../../../public/images/SVG/gallery-icon-btn-desk.svg";

export default function ProjectGalleryModal({
  gallery,
  isOpen,
  onClose,
  activeIndex,
  setActiveIndex,
  mainSwiper,
}) {
  const modalRef = useRef(null);
  const isSyncingRef = useRef(false);

  // Open modal and sync with active index
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.slideToLoop(activeIndex, 0);
    }
  }, [isOpen, activeIndex]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    const modalIndex = modalRef.current?.realIndex ?? activeIndex;
    setActiveIndex(modalIndex);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Handle slide change in modal
  const handleModalSlideChange = (swiper) => {
    if (isSyncingRef.current) return;
    isSyncingRef.current = true;

    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);

    // Sync with main swiper
    if (mainSwiper.current) {
      mainSwiper.current.slideToLoop(newIndex, 300);
    }

    setTimeout(() => {
      isSyncingRef.current = false;
    }, 100);
  };

  if (!gallery || gallery.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90"
            onClick={handleBackdropClick}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <div
              className="relative w-full max-w-7xl max-h-[95vh] h-full flex flex-col bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all"
                aria-label="Close modal"
              >
                <span className="text-white text-2xl">×</span>
              </button>

              {/* Modal slider */}
              <div className="relative flex items-center justify-center h-full">
                <SwiperWrapper
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                  }}
                  swiperClassName="w-full h-full"
                  showNavigation={false}
                  uniqueKey="project-gallery-modal"
                  additionalOptions={{
                    speed: 300,
                  }}
                  onSwiper={(swiper) => {
                    modalRef.current = swiper;
                    if (swiper) {
                      swiper.slideToLoop(activeIndex, 0);
                    }
                  }}
                  onSlideChange={handleModalSlideChange}
                >
                  {gallery.map((item, index) => (
                    <SwiperSlide key={index} className="h-full">
                      {item?.asset?.url && (
                        <div className="relative w-full h-full flex items-center justify-center p-4 pointer-events-none">
                          <div className="relative w-full h-full max-w-full max-h-full pointer-events-none">
                            <Image
                              src={item.asset.url}
                              alt={`Gallery image ${index + 1}`}
                              fill
                              className="object-contain pointer-events-none"
                              sizes="(max-width: 768px) 100vw, 1280px"
                              priority={index === activeIndex}
                            />
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </SwiperWrapper>

                {/* Desktop/Tablet Navigation Buttons - matching ProjectGallery style with border and brighter background */}
                <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-2 pointer-events-none z-[100]">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      if (modalRef.current) {
                        modalRef.current.slidePrev();
                      }
                    }}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                    className="flex items-center justify-center transition-transform hover:scale-110 pointer-events-auto rounded-full border-2 border-white/70 bg-white/20 hover:bg-white/30"
                  >
                    <Image
                      src={galleryIconBtnDesk}
                      alt="Previous"
                      className="rotate-180 md:w-[60px] md:h-[60px] lg:w-[74px] lg:h-[74px] pointer-events-none"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      if (modalRef.current) {
                        modalRef.current.slideNext();
                      }
                    }}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                    className="flex items-center justify-center transition-transform hover:scale-110 pointer-events-auto rounded-full border-2 border-white/70 bg-white/20 hover:bg-white/30"
                  >
                    <Image
                      src={galleryIconBtnDesk}
                      alt="Next"
                      className="md:w-[60px] md:h-[60px] lg:w-[74px] lg:h-[74px] pointer-events-none"
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

