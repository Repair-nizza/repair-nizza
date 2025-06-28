"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const HeroBlurCard = ({ data }) => {
  const locale = useLocale();
  const router = useRouter();

  if (!data?.title) return null;

  const handleClick = () => {
    if (data._id) {
      router.push(`/${locale}/projects/${data._id}`);
    }
  };

  return (
    <div className="absolute top-8 md:top-[56px] md:left-0 lg:top-[-45px] lg:left-0 h-[393px] overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        className="rounded-t-[16px] rounded-b-0 p-7 w-[310px] lg:w-[359px] h-[393px] backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] flex flex-col"
      >
        <div>
          {data.mainImage?.asset?.url && (
            <>
              <Image
                src={data.mainImage.asset.url}
                alt={data.title[locale]}
                width={276}
                height={134}
                style={{ height: "134px" }}
                className="rounded-md mb-[22px] lg:hidden"
              />
              <Image
                src={data.mainImage.asset.url}
                alt={data.title[locale]}
                width={325}
                height={134}
                style={{ height: "134px" }}
                className="rounded-md mb-[22px] hidden lg:block"
              />
            </>
          )}
          <h3 className="font-arsenal font-normal text-base text-primary-white uppercase mb-4 w-[171px] lg:w-[246px] lg:text-xl lg:leading-6">
            {data.title[locale]}
          </h3>
          <p className="font-montserrat font-light text-xs text-primary-white mb-6 lg:text-sm">
            {data.subtitle[locale]}
          </p>
        </div>
        <button
          onClick={handleClick}
          className="w-[253px] h-9 rounded-[32px] lg:w-[303px] lg:h-[42px] lg:text-sm lg:leading-5 bg-transparent border border-primary-white text-primary-white font-raleway font-normal text-xs mx-auto mt-auto block hover:bg-primary-white hover:text-primary-black transition-all duration-300"
        >
          {locale === "ru"
            ? "Посмотреть проект"
            : locale === "en"
            ? "View project"
            : "Voir le projet"}
        </button>
      </motion.div>
    </div>
  );
};

export default HeroBlurCard;
