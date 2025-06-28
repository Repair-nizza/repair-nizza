"use client";

import React from "react";
import Container from "./Container";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import instagram from "../../public/images/SVG/instagram.svg";
import telegram from "../../public/images/SVG/telegram.svg";
import tikTok from "../../public/images/SVG/tik-tok.svg";
import icon from "../../public/images/SVG/footer-icon.svg";
import motifMob from "../../public/images/image/footer-motif-mob.png";
import shadowMob from "../../public/images/image/footer-shadow-mob.png";
import shadowDesk from "../../public/images/image/footer-shadow-desk.png";
import motifDesk from "../../public/images/image/footer-motif-desk.png";

const Footer = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black overflow-hidden relative">
      <Image
        src={motifMob}
        alt="motif"
        className="absolute bottom-[305px] md:bottom-0 right-0 lg:hidden"
      />
      <Image
        src={shadowMob}
        alt="motif"
        className="absolute bottom-[465px] md:bottom-[70px] right-0 lg:hidden"
      />
      <Container className="relative z-10">
        <Image
          src={motifDesk}
          alt="motif"
          className="absolute bottom-0 md:bottom-0 left-[290px] lg:block hidden -z-10"
        />

        <Image
          src={shadowDesk}
          alt="motif"
          className="absolute bottom-[90px] left-[150px] lg:block hidden -z-10"
        />
        <div className="pt-20 pb-[30px] md:flex md:flex-wrap md:gap-14 lg:gap-0">
          <div className="flex flex-col gap-3 mb-10 md:mb-0 lg:mr-[334px]">
            <Link
              href="/"
              className="font-arsenal font-normal text-xl text-primary-white leading-[22px] uppercase hover:scale-105 transition-all duration-300"
            >
              Solide renovation
            </Link>
            <p className="font-montserrat font-light text-xs text-primary-white w-[195px]">
              {t("slogan")}
            </p>
            <ul className="gap-5 hidden lg:flex mt-[30px]">
              <li>
                <Link href="/">
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={24}
                    height={24}
                    className="hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src={telegram}
                    alt="telegram"
                    width={24}
                    height={24}
                    className="hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src={tikTok}
                    alt="tik tok"
                    width={24}
                    height={24}
                    className="hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:flex lg:gap-[76px] lg:mb-[90px] lg:ml-auto">
            <nav className="lg:flex lg:gap-[76px] lg:order-2">
              <ul className="flex flex-col gap-4 mb-8 md:items-center lg:items-start lg:mb-0">
                <li className="hover:scale-105 transition-all duration-300">
                  <Link
                    href="/"
                    className="font-montserrat font-normal text-xs text-primary-white uppercase"
                  >
                    {t("navigation.main")}
                  </Link>
                </li>
                <li className="hover:scale-105 transition-all duration-300">
                  <Link
                    href="/leave-request"
                    className="font-montserrat font-normal text-xs text-primary-white uppercase"
                  >
                    {t("navigation.request")}
                  </Link>
                </li>
                <li className="hover:scale-105 transition-all duration-300">
                  <Link
                    href="/portfolio"
                    className="font-montserrat font-normal text-xs text-primary-white uppercase"
                  >
                    {t("navigation.portfolio")}
                  </Link>
                </li>
                <li className="hover:scale-105 transition-all duration-300">
                  <Link
                    href="/contacts"
                    className="font-montserrat font-normal text-xs text-primary-white uppercase"
                  >
                    {t("navigation.contacts")}
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-4 mb-16 md:items-center lg:items-start lg:mb-0">
                <li className="hover:scale-105 transition-all duration-300">
                  <Link
                    href="/"
                    className="font-montserrat font-normal text-xs text-primary-white uppercase"
                  >
                    {t("legal.data")}
                  </Link>
                </li>
                <li className="hover:scale-105 transition-all duration-300">
                  <Link
                    href="/"
                    className="font-montserrat font-normal text-xs text-primary-white uppercase"
                  >
                    {t("legal.contract")}
                  </Link>
                </li>
                <li className="hover:scale-105 transition-all duration-300">
                  <Link
                    href="/"
                    className="font-montserrat font-normal text-xs text-primary-white uppercase"
                  >
                    {t("legal.offer")}
                  </Link>
                </li>
                <li className="hover:scale-105 transition-all duration-300">
                  <Link
                    href="/"
                    className="font-montserrat font-normal text-xs text-primary-white uppercase"
                  >
                    {t("legal.privacy")}
                  </Link>
                </li>
              </ul>
            </nav>
            <address className="flex flex-col gap-3 mb-6 md:items-center lg:items-start lg:mb-0 lg:order-1">
              <a
                className="font-montserrat font-normal text-xs not-italic text-primary-white uppercase leading-[18px] hover:scale-105 transition-all duration-300"
                href="tel:+380970067656"
              >
                +380-97-006-76-56
              </a>
              <a
                className="font-montserrat font-normal text-xs not-italic text-primary-white uppercase leading-[18px] hover:scale-105 transition-all duration-300"
                href="mailto:email@gmail.com"
              >
                email@gmail.com
              </a>
            </address>
          </div>
          <ul className="flex gap-5 mb-[94px] md:mb-0 md:ml-auto lg:hidden">
            <li>
              <Link href="/">
                <Image
                  src={instagram}
                  alt="instagram"
                  width={24}
                  height={24}
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={telegram}
                  alt="telegram"
                  width={24}
                  height={24}
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={tikTok}
                  alt="tik tok"
                  width={24}
                  height={24}
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </li>
          </ul>
          <p className="font-montserrat font-normal text-base not-italic text-primary-white uppercase leading-[29px] mb-6 md:mb-0 md:mt-auto lg:mr-auto">
            &copy; {currentYear} Solide renovation
          </p>
          <div className="md:ml-auto lg:mt-auto">
            <p className="font-raleway font-normal text-[6px] text-primary-white leading-6 uppercase tracking-[0.08em]">
              {t("createdBy")}
            </p>
            <div className="flex items-center gap-[6px]">
              <p className="font-raleway font-medium text-[13px] text-primary-white leading-6 uppercase tracking-[0.04em]">
                Code-site.art
              </p>
              <Image src={icon} alt="icon" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
