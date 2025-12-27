"use client";

import { SlideshowLightbox } from "lightbox.js-react";

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

  return (
    <SlideshowLightbox
      images={lightboxImages}
      open={isOpen}
      lightboxIdentifier="project-gallery-lightbox"
      startingSlideIndex={activeIndex}
      onClose={handleClose}
      onSelect={handleSelect}
      showThumbnails={false}
      showControls={true}
      showArrows={true}
      className="lightbox-custom"
    />
  );
}
