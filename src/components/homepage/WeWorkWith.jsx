"use client";

import MarqueeLine from "../shared/marquee/MarqueeLine";
import Container from "../Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import linesMob from "../../../public/images/image/marquee/linesMob.webp";
import linesDesk from "../../../public/images/image/marquee/linesDesk.webp";
import leavesMob from "../../../public/images/image/marquee/leavesMob.webp";
import leavesDesk from "../../../public/images/image/marquee/leavesDesk.webp";

export default function WeWorkWith() {
    const t = useTranslations("weWorkWith");

    return (
        <section className="relative pb-[104px] lg:pb-[56px]">
            <div className="absolute top-[-58px] left-1/2 -translate-x-1/2 -z-20 lg:hidden w-[640px] h-[412px]">
                <Image
                    src={linesMob}
                    alt="linesMob"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="absolute top-[-184px] left-[50%] -z-20 lg:block hidden w-[1016px] h-[625px]">
                <Image
                    src={linesDesk}
                    alt="linesDesk"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <Image
                src={leavesMob}
                alt="leavesMob"
                width={210}
                height={210}
                className="absolute bottom-[-50px] left-[50%] -z-20 lg:hidden"
                loading="lazy"
            />
            <Image
                src={leavesDesk}
                alt="leavesDesk"
                width={316}
                height={316}
                className="absolute top-[-102px] left-[31%] -z-20 lg:block hidden"
                loading="lazy"
            />
            <Container className="pt-[114px] lg:pt-[124px] pb-[44px] lg:pb-[41px]">
                <h2 className="font-arsenal text-[32px] lg:text-[64px] text-primary-black uppercase leading-[125%]">
                    {t("title")}
                </h2>
            </Container>
            <MarqueeLine />
        </section>
    );
}
