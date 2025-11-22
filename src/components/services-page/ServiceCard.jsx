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
  const imageUrl = service.image1?.asset?.url;

  if (!imageUrl) return null;

  return (
    <>
      {/* Mobile Card - Similar to Portfolio Card */}
      <div className="relative md:hidden mx-auto">
        <div className="relative w-[310px] h-[402px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[310px] rounded-b-[20px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] pt-4 pb-5 pr-10 pl-[25px]">
          <h3 className="font-arsenal font-normal text-base text-primary-white leading-[19px] w-[174px] uppercase mb-3">
            {title}
          </h3>
          <p className="font-montserrat font-light text-xs text-primary-white">
            {description}
          </p>
        </div>
        {service.slug?.current && (
          <ArrowDiagonalButton
            onClick={handleServiceClick}
            variant="white"
            className="top-[260px] right-[30px]"
          />
        )}
      </div>

      {/* Desktop/Tablet Card - Horizontal with alternating layout */}
      <div className="hidden md:flex w-full max-w-[1440px] mx-auto items-end">
        {isOdd ? (
          // Odd cards: Text left, Image right
          <>
            <div className="flex-1 flex flex-col justify-end pb-6 pr-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-arsenal font-normal text-3xl text-primary-black uppercase">
                  {title}
                </h3>
                {service.slug?.current && (
                  <ArrowDiagonalButton
                    onClick={handleServiceClick}
                    variant="black"
                    position="relative"
                    className=""
                  />
                )}
              </div>
              <p className="font-montserrat font-light text-base text-primary-black leading-[19px] mb-6 max-w-[500px]">
                {description}
              </p>
            </div>
            <div className="relative w-[845px] h-[500px] flex-shrink-0">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="rounded-[20px] object-cover"
              />
            </div>
          </>
        ) : (
          // Even cards: Image left, Text right
          <>
            <div className="relative w-[845px] h-[500px] flex-shrink-0">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="rounded-[20px] object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-end pb-6 pl-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-arsenal font-normal text-3xl text-primary-black uppercase">
                  {title}
                </h3>
                {service.slug?.current && (
                  <ArrowDiagonalButton
                    onClick={handleServiceClick}
                    variant="black"
                    position="relative"
                    className=""
                  />
                )}
              </div>
              <p className="font-montserrat font-light text-base text-primary-black leading-[19px] mb-6 max-w-[500px]">
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

