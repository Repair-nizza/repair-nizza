"use client";

import { SlideshowLightbox } from "lightbox.js-react";
import Image from "next/image";
import galleryIconBtnDesk from "../../../public/images/SVG/gallery-icon-btn-desk.svg";
import galleryIconBtnMob from "../../../public/images/SVG/gallery-icon-btn-mob.svg";
import closeIcon from "../../../public/images/SVG/close-icon.svg";

export default function ProjectGalleryModal({
  gallery,
  isOpen,
  onClose,
  activeIndex,
  setActiveIndex,
  mainSwiper,
}) {
  if (!gallery || gallery.length === 0) return null;

  const lightboxImages = gallery
    .filter((item) => item?.asset?.url)
    .map((item, index) => ({
      src: item.asset.url,
      alt: `Gallery image ${index + 1}`,
    }));

  const handleClose = () => {
    onClose();
  };

  const handleSelect = (index) => {
    if (setActiveIndex && typeof index === 'number') {
      setActiveIndex(index);
    }
    if (mainSwiper?.current && typeof index === 'number') {
      mainSwiper.current.slideToLoop(index, 300);
    }
  };

  const CustomPrevArrow = () => (
    <Image
      src={galleryIconBtnDesk}
      alt="Previous"
      width={60}
      height={60}
      className="rotate-180 md:w-[60px] md:h-[60px] lg:w-[74px] lg:h-[74px] border border-primary-white rounded-full"
      style={{ display: 'block', width: '60px', height: '60px', minWidth: '60px', minHeight: '60px' }}
    />
  );

  const CustomNextArrow = () => (
    <Image
      src={galleryIconBtnDesk}
      alt="Next"
      width={60}
      height={60}
      className="md:w-[60px] md:h-[60px] lg:w-[74px] lg:h-[74px] border border-primary-white rounded-full"
      style={{ display: 'block', width: '60px', height: '60px', minWidth: '60px', minHeight: '60px' }}
    />
  );

  const CustomCloseButton = () => (
    <Image
      src={closeIcon}
      alt="Close"
      width={14}
      height={14}
      className="shrink-0 absolute top-5 right-5 md:top-4 md:right-4 w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 z-[9999]"
      style={{ 
        filter: 'brightness(0) invert(1)',
        display: 'block',
        minWidth: '14px',
        minHeight: '14px'
      }}
    />
  );

  return (
    <SlideshowLightbox
      images={lightboxImages}
      open={isOpen}
      lightboxIdentifier="project-gallery-lightbox"
      startingSlideIndex={activeIndex}
      onClose={handleClose}
      onSelect={handleSelect}
      showThumbnails={false}
      showControls={false}
      showArrows={true}
      prevArrow={<CustomPrevArrow />}
      nextArrow={<CustomNextArrow />}
      closeComponent={<CustomCloseButton />}
      className="lightbox-custom"
    />
  );
}
