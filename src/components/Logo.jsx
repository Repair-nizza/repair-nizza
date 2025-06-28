"use client";

import Image from "next/image";
import logo from "../../public/images/SVG/logo-svg.svg";
import { Link } from "@/i18n/navigation";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 mr-[30px] md:mr-[350px] lg:mr-0">
      <Image src={logo} alt="logo image" />
      <Link
        href="/"
        className="font-arsenal font-normal text-base text-primary-black uppercase lg:text-2xl"
      >
        Solide Renovation
      </Link>
    </div>
  );
};

export default Logo;
