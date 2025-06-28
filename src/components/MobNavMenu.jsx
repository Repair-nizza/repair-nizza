"use client";

import Image from "next/image";
import closeBtn from "../../public/images/SVG/close-icon.svg";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobNavMenu = ({ isOpen, setIsOpen, openModal }) => {
  const t = useTranslations();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{
            clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 py-20 px-[60px] bg-primary-white z-30 w-full h-screen"
        >
          <div className="flex flex-col w-[240px] md:w-[300px] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <Image
                src={closeBtn}
                alt="close button"
                className="absolute top-[20px] right-[20px] cursor-pointer"
                width={16}
                height={16}
                onClick={() => setIsOpen(false)}
              />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="font-arsenal font-normal text-2xl md:text-3xl text-primary-black text-center uppercase mx-auto mb-4"
            >
              {t("mobileMenu.discussProject")}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="font-montserrat font-light text-xs md:text-sm text-primary-black leading-5 text-center mb-8 mx-auto"
            >
              {t("mobileMenu.leaveContacts")}
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.2,
              }}
              onClick={openModal}
              className="w-[241px] h-10 bg-transparent border border-primary-black text-primary-black font-montserrat font-light text-sm mx-auto rounded-[20px] mb-20 hover:bg-primary-black hover:text-primary-white transition-all duration-300 will-change-opacity"
            >
              {t("mobileMenu.contactButton")}
            </motion.button>
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <ul className="flex flex-col gap-5 md:items-center">
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                >
                  <Link
                    href="/portfolio"
                    className="font-montserrat font-normal text-base text-primary-black"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("portfolio")}
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Link
                    href="/leave-request"
                    className="font-montserrat font-normal text-base text-primary-black"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("request")}
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.3 }}
                >
                  <Link
                    href="/contacts"
                    className="font-montserrat font-normal text-base text-primary-black"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("contacts")}
                  </Link>
                </motion.li>
              </ul>
            </motion.nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobNavMenu;
