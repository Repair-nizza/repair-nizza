"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import ClockIcon from "../icons/ClockIcon";

const BlogCard = ({ data }) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("blogPage");

  const handleBlogClick = () => {
    router.push(`/${locale}/blog/${data.slug?.current || data.slug}`);
  };

  if (!data?.title || !data?.title[locale]) return null;

  return (
    <div className="relative rounded-[8px] overflow-hidden bg-secondary-grey max-w-[386px]">
      {data.mainImage?.asset?.url && (
        <div className="relative w-full h-[215px]">
          <Image
            src={data.mainImage.asset.url}
            alt={data.title[locale]}
            fill
            className="rounded-[8px] object-cover"
          />
          <div className="absolute bottom-4 left-4 w-[148px] h-[39px] bg-primary-white border border-primary-black rounded-full flex items-center gap-3 px-4">
            <ClockIcon className="size-[27px] text-primary-black" />
            <p className="font-montserrat text-base text-primary-black leading-[130%]">
              {data.readTime} {t("minRead")}
            </p>
          </div>
        </div>
      )}
      <div className="w-full py-8 px-2 md:px-4">
        <h3 className="px-2 md:px-0 font-arsenal text-base lg:text-[20px] text-primary-black leading-[125%] uppercase mb-4">
          {data.title[locale]}
        </h3>
        <p className="px-2 md:px-0 font-montserrat text-[12px] lg:text-[14px] leading-[125%] text-secondary-greyText mb-8">
          {data.subtitle?.[locale]}
        </p>
        <button
          onClick={handleBlogClick}
          className="w-full h-10 bg-transparent border border-primary-black rounded-full flex items-center justify-center gap-3 px-4"
        >
          <p className="font-montserrat text-[14px] text-primary-black leading-[143%]">
            {t("readMore")}
          </p>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
