"use client";

import { motion } from "framer-motion";
import bgImgMob from "../../../public/images/image/hero-img-mob.webp";
import bgImgDesk from "../../../public/images/image/hero-img-desk.webp";
import { useTranslations } from "next-intl";
import HeroBlurCard from "./HeroBlurCard";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const Hero = ({ heroBlurCardData }) => {
  const t = useTranslations("hero");
  const router = useRouter();
  const locale = useLocale();

  const handleConsultationClick = () => {
    router.push(`/${locale}/leave-request`);
  };

  return (
    <>
      <motion.div
        style={{ backgroundImage: `url(${bgImgMob.src})` }}
        className="bg-cover bg-center h-[730px] w-full rounded-t-[28px] md:hidden"
      >
        <Container className="px-6 pt-[65px] mx-auto">
          <div className="h-full flex flex-col">
            <div>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-arsenal font-normal text-4xl text-primary-white text-center mb-5 mx-auto uppercase"
              >
                {t("title")}
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="font-montserrat font-normal text-base text-primary-white text-center w-[262px] mx-auto mb-10"
              >
                {t("subtitle")}
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                onClick={handleConsultationClick}
                className="w-[312px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-medium text-sm mx-auto block hover:bg-primary-black hover:text-primary-white transition-all duration-300"
              >
                {t("button")}
              </motion.button>
            </div>
            <div className="mt-auto flex relative">
              <HeroBlurCard data={heroBlurCardData} />
            </div>
          </div>
        </Container>
      </motion.div>
      <motion.div
        style={{ backgroundImage: `url(${bgImgDesk.src})` }}
        className="hidden md:block lg:hidden bg-cover bg-center h-[730px] w-full rounded-t-[28px]"
      >
        <Container className="px-6 pt-[65px] mx-auto relative">
          <div className="h-full flex flex-col">
            <div>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-arsenal font-normal text-5xl text-primary-white text-center mb-5 mx-auto uppercase"
              >
                {t("title")}
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="font-montserrat font-normal text-lg text-primary-white text-center w-[262px] mx-auto mb-10"
              >
                {t("subtitle")}
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                onClick={handleConsultationClick}
                className="w-[312px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-medium text-sm mx-auto block hover:bg-primary-black hover:text-primary-white transition-all duration-300"
              >
                {t("button")}
              </motion.button>
            </div>
            <div className="mt-auto flex relative">
              <HeroBlurCard data={heroBlurCardData} />
            </div>
          </div>
        </Container>
      </motion.div>
      <motion.div
        style={{ backgroundImage: `url(${bgImgDesk.src})` }}
        className="hidden lg:block bg-cover bg-center h-[730px] w-full rounded-t-[28px]"
      >
        <Container className=" px-10 pt-[94px] mx-auto relative">
          <div className="h-full flex flex-col">
            <div className="flex justify-between">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-montserrat font-normal text-xl text-primary-white w-[262px]"
              >
                {t("subtitle")}
              </motion.p>
              <div>
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="font-arsenal font-normal text-[83px] w-[772px] text-primary-white text-right mb-9 mx-auto leading-[100px] uppercase"
                >
                  {t("title")}
                </motion.h1>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                  onClick={handleConsultationClick}
                  className="w-[317px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-medium text-sm ml-auto block hover:bg-primary-black hover:text-primary-white transition-all duration-300"
                >
                  {t("button")}
                </motion.button>
              </div>
            </div>
            <div className="mt-auto flex relative">
              <HeroBlurCard data={heroBlurCardData} />
            </div>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Hero;
