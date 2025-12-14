"use client";

import { useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../Container";

const BlogContent = ({ content }) => {
  const locale = useLocale();

  const getBlockText = blockContent => {
    if (!blockContent?.[locale]) return "";
    return blockContent[locale]
      .map(block => block.children?.map(child => child.text).join("") || "")
      .join(" ");
  };

  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });

  if (!content || content.length === 0) return null;

  return (
    <Container className="py-10 lg:py-20">
      <motion.div
        ref={contentRef}
        initial={{ y: 50, opacity: 0 }}
        animate={isContentInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-12"
      >
        {content.map((block, index) => {
          // Title and Text Block
          if (block._type === "titleText") {
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isContentInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="space-y-4"
              >
                {block.title?.[locale] && (
                  <h2 className="font-arsenal font-normal text-2xl lg:text-4xl text-primary-black uppercase">
                    {block.title[locale]}
                  </h2>
                )}
                {block.description && (
                  <div className="font-montserrat font-light text-sm lg:text-base text-primary-black leading-relaxed whitespace-pre-line">
                    {getBlockText(block.description)}
                  </div>
                )}
              </motion.div>
            );
          }

          // List Block
          if (block._type === "listBlock") {
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isContentInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="space-y-4"
              >
                {block.title?.[locale] && (
                  <h2 className="font-arsenal font-normal text-2xl lg:text-4xl text-primary-black uppercase mb-6">
                    {block.title[locale]}
                  </h2>
                )}
                {block.items && block.items.length > 0 && (
                  <ol className="space-y-6">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="space-y-2 flex gap-4">
                        <span className="font-arsenal font-normal text-lg lg:text-xl text-primary-black flex-shrink-0">
                          {itemIndex + 1}.
                        </span>
                        <div className="flex-1 space-y-2">
                          {item.title?.[locale] && (
                            <div className="font-arsenal font-normal text-lg lg:text-xl text-primary-black">
                              {item.title[locale]}
                            </div>
                          )}
                          {item.description && (
                            <div className="font-montserrat font-light text-sm lg:text-base text-primary-black leading-relaxed whitespace-pre-line">
                              {getBlockText(item.description)}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
              </motion.div>
            );
          }

          // Conclusion Block
          if (block._type === "conclusionBlock") {
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isContentInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="space-y-4"
              >
                {block.title?.[locale] && (
                  <h2 className="font-arsenal font-normal text-2xl lg:text-4xl text-primary-black uppercase">
                    {block.title[locale]}
                  </h2>
                )}
                {block.description && (
                  <div className="font-montserrat font-light text-sm lg:text-base text-primary-black leading-relaxed whitespace-pre-line">
                    {getBlockText(block.description)}
                  </div>
                )}
              </motion.div>
            );
          }

          return null;
        })}
      </motion.div>
    </Container>
  );
};

export default BlogContent;
