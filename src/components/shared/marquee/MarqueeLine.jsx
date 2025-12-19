"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const marqueeImages = [
    "41zero42.svg",
    "adl.svg",
    "agape.svg",
    "agapecasa.svg",
    "arco.svg",
    "astep.svg",
    "baxter.svg",
    "bisazza.svg",
    "bnbatialia.svg",
    "boffi.svg",
    "brokis.svg",
    "carpetedition.svg",
    "casabath.svg",
    "cassina.svg",
    "cea.svg",
    "dada.svg",
    "davidegroppi.svg",
    "dcweditions.svg",
    "dk3.svg",
    "ethimo.svg",
    "fantini.svg",
    "flexform.svg",
    "flos.svg",
    "gervasoni.svg",
    "gessi.svg",
    "giopatocoombes.svg",
    "gloster.svg",
    "gypsum.svg",
    "hotbath.svg",
    "inhosomething.svg",
    "itlas.svg",
    "ivanoredaelli.svg",
    "karakter.svg",
    "laborlegno.svg",
    "listonegiordano.svg",
    "living.svg",
    "lumina.svg",
    "marchicucine.svg",
    "matteobrioni.svg",
    "maxalto.svg",
    "meridiani.svg",
    "minotti.svg",
    "molteninc.svg",
    "nanimarquina.svg",
    "nemo.svg",
    "poliform.svg",
    "polrona.svg",
    "rimadesio.svg",
    "salvatori.svg",
    "santancole.svg",
    "timenstyle.svg",
    "viero.svg",
    "vispring.svg",
    "zampieri.svg",
    "zanotta.svg",
];

export default function MarqueeLine() {
    return (
        <motion.div
            initial={{ opacity: 0.01 }}
            whileInView={{
                opacity: 1,
                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            }}
            exit={{
                opacity: 0,
                transition: { duration: 0.3, ease: [0.42, 0, 1, 1] },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
        >
            <Marquee
                autoFill={true}
                speed={70}
                className="h-[76px] w-full bg-primary-black flex items-center"
            >
                {marqueeImages.map((image, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center justify-center mx-5 h-[62px]"
                    >
                        <Image
                            src={`/images/SVG/marquee/${image}`}
                            alt={image.replace(".svg", "")}
                            width={0}
                            height={62}
                            className="h-[62px] w-auto object-contain"
                            unoptimized
                        />
                    </div>
                ))}
            </Marquee>
        </motion.div>
    );
}
