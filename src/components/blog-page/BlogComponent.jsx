"use client";

import React, { useState, useMemo, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import BlogCard from "./BlogCard";
import { useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import leavesBotMob from "../../../public/images/image/blog-page/leavesBotMob.png";
import leavesTopMob from "../../../public/images/image/blog-page/leavesTopMob.png";
import leavesBotDesk from "../../../public/images/image/blog-page/leavesBotDesk.png";
import leavesTopDesk from "../../../public/images/image/blog-page/leavesTopDesk.png";
import linesDesk from "../../../public/images/image/blog-page/linesTopDesk.png";
import arrowWhite from "../../../public/images/SVG/arrow-white-portfolio.svg";
import arrowBlack from "../../../public/images/SVG/arrow-black-portfolio.svg";
import Container from "../Container";

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const BlogListSection = ({ blogs }) => {
  const t = useTranslations("blogPage");
  const locale = useLocale();
  const [currentPage, setCurrentPage] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const itemsPerPage = isDesktop ? 6 : 4;
  const blogRef = useRef(null);

  const cardsRef = useRef(null);

  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrevClick = () => {
    setCurrentPage(prev =>
      prev > 0 ? prev - 1 : Math.ceil((blogs?.length || 0) / itemsPerPage) - 1
    );
    scrollToTop();
  };

  const handleNextClick = () => {
    setCurrentPage(prev =>
      prev < Math.ceil((blogs?.length || 0) / itemsPerPage) - 1 ? prev + 1 : 0
    );
    scrollToTop();
  };

  const handlePageClick = page => {
    setCurrentPage(page);
    scrollToTop();
  };

  const currentItems = (blogs || []).slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil((blogs?.length || 0) / itemsPerPage);

  return (
    <div ref={blogRef} className="relative pt-[115px] pb-[100px] lg:pt-[86px]">
      <Image
        src={leavesTopMob}
        alt="leaves image"
        width={268}
        height={268}
        className="absolute lg:hidden w-auto h-[268px] top-[-127px] left-[10px] scale-110% -z-10"
      />
      <Image
        src={leavesBotMob}
        alt="leaves image"
        width={243}
        height={243}
        className="absolute lg:hidden w-auto h-[243px] bottom-[-124px] scale-120% -z-10"
      />
      <Image
        src={leavesTopDesk}
        alt="leaves image"
        width={382}
        height={382}
        className="absolute hidden lg:block w-auto h-[382px] top-[-255px] left-[6px] scale-110% -z-10"
      />
      <Image
        src={leavesBotDesk}
        alt="leaves image"
        width={243}
        height={243}
        className="absolute hidden lg:block w-auto h-[243px] bottom-[-69px] left-[18px] scale-120% -z-10"
      />
      <Container className="relative">
        <Image
          src={linesDesk}
          alt="lines image"
          width={922}
          height={360}
          className="absolute hidden lg:block top-[-263px] right-[-185px] -z-10"
        />
        <motion.div
          ref={cardsRef}
          initial={{ y: 100, opacity: 0 }}
          animate={
            isCardsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-row flex-wrap justify-start gap-[26px] mb-10 md:gap-[26px] lg:gap-5"
        >
          {!blogs || blogs.length === 0 ? (
            <div className="w-full text-center font-arsenal text-xl md:text-2xl lg:text-3xl text-primary-black relative z-10">
              {t("noBlogs")}
            </div>
          ) : (
            currentItems.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isCardsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="flex-[0_1_310px] max-w-[386px]"
              >
                <BlogCard data={blog} />
              </motion.div>
            ))
          )}
        </motion.div>

        {blogs && blogs.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 md:gap-10">
            <div
              onClick={handlePrevClick}
              className="border border-primary-black rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-black group transition-all duration-300 cursor-pointer"
            >
              <div className="bg-transparent border border-primary-black rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-white transition-all duration-300">
                <Image
                  src={arrowBlack}
                  alt="arrow button"
                  className="block group-hover:hidden transition-transform duration-300 rotate-180"
                />
                <Image
                  src={arrowWhite}
                  alt="arrow button"
                  className="hidden group-hover:block transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex gap-4 items-center">
              {Array.from({ length: totalPages }, (_, i) => (
                <span
                  key={i}
                  className={`font-montserrat text-lg cursor-pointer ${
                    currentPage === i
                      ? "border border-primary-black rounded-full w-[30px] h-[30px] flex items-center justify-center"
                      : ""
                  }`}
                  onClick={() => handlePageClick(i)}
                >
                  {i + 1}
                </span>
              ))}
            </div>

            <div
              onClick={handleNextClick}
              className="border border-primary-black rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-black group transition-all duration-300 cursor-pointer"
            >
              <div className="bg-transparent border border-primary-black rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-white transition-all duration-300">
                <Image
                  src={arrowBlack}
                  alt="arrow button"
                  className="block group-hover:hidden transition-transform duration-300"
                />
                <Image
                  src={arrowWhite}
                  alt="arrow button"
                  className="hidden group-hover:block transition-transform duration-300 rotate-180"
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default BlogListSection;
