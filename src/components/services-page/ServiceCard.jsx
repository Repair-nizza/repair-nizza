"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import ArrowDiagonalButton from "../ArrowDiagonalButton";

const ServiceCard = ({ service, index }) => {
  const router = useRouter();
  const locale = useLocale();
  const isOdd = index % 2 === 0; // 0-indexed, so first card (index 0) is odd (text left, image right)

  const handleServiceClick = () => {
    if (service.slug?.current) {
      router.push(`/${locale}/services/${service.slug.current}`);
    }
  };

  const title = service.title?.[locale] || service.title?.en || service.title?.ru || "Untitled Service";
  const description = service.shortDescription?.[locale] || service.shortDescription?.en || service.shortDescription?.ru || "";
  // Use cardImage, or if missing - first image from gallery
  const imageUrl = service.cardImage?.asset?.url || (service.gallery && service.gallery[0]?.asset?.url);

  // Don't return null - render card even without image, or use placeholder
  // if (!imageUrl) return null;

  return (
    <>
      {/* Mobile Card - Glass background with image on top and text below */}
      <div className="relative md:hidden mx-auto w-[310px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] rounded-[12px] overflow-hidden">
        {/* Image on top */}
        {imageUrl ? (
          <div className="relative w-[310px] h-[250px] rounded-[12px]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="relative w-[310px] h-[250px] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
        
        {/* Text section on bottom */}
        <div className="pt-[13px] pb-[19px] px-[25px]">
          <div className="flex items-center gap-1 mb-3">
            <h3 className="font-arsenal font-normal text-base text-primary-white leading-[125%] uppercase flex-1">
              {title}
            </h3>
            {service.slug?.current && (
              <ArrowDiagonalButton
                onClick={handleServiceClick}
                variant="white"
                position="relative"
                className=""
              />
            )}
          </div>
          <p className="font-montserrat font-light text-[12px] leading-[125%] text-primary-white">
            {description}
          </p>
        </div>
      </div>

      {/* Desktop/Tablet Card - Horizontal with alternating layout */}
      <div className="hidden md:flex w-full max-w-[1440px] mx-auto items-end">
        {isOdd ? (
          // Odd cards: Text left, Image right
          <>
            <div className="flex-1 flex flex-col justify-end pb-10 pr-8 ">
              <div className="flex items-center gap-4 mb-5 max-w-[346px]">
                <h3 className="font-arsenal text-[24px] leading-[125%] uppercase ">
                  {title}
                </h3>
                {service.slug?.current && (
                  <ArrowDiagonalButton
                    onClick={handleServiceClick}
                    variant="black"
                    position="relative"
                    className="w-[74px] h-[74px]"
                  />
                )}
              </div>
              <p className="font-montserrat font-light text-[16px] leading-[125%] text-primary-black">
                {description}
              </p>
            </div>
            {imageUrl ? (
              <div className="relative w-[845px] h-[500px] flex-shrink-0 -mr-10">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="rounded-[20px] object-cover"
                />
              </div>
            ) : (
              <div className="relative w-[845px] h-[500px] flex-shrink-0 bg-gray-200 rounded-[20px] flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
          </>
        ) : (
          // Even cards: Image left, Text right
          <>
            {imageUrl ? (
              <div className="relative w-[845px] h-[500px] flex-shrink-0 -ml-10">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="rounded-[20px] object-cover"
                />
              </div>
            ) : (
              <div className="relative w-[845px] h-[500px] flex-shrink-0 bg-gray-200 rounded-[20px] flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
            <div className="flex-1 flex flex-col justify-end pb-10 pl-8">
              <div className="flex items-center gap-4 mb-5 max-w-[346px]">
                <h3 className="font-arsenal text-[24px] leading-[125%] uppercase">
                  {title}
                </h3>
                {service.slug?.current && (
                  <ArrowDiagonalButton
                    onClick={handleServiceClick}
                    variant="black"
                    position="relative"
                    className="w-[74px] h-[74px]"
                  />
                )}
              </div>
              <p className="font-montserrat font-light text-[16px] leading-[125%] text-primary-black">
                {description}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ServiceCard;

