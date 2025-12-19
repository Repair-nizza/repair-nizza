"use client";

import MarqueeLine from "../shared/marquee/MarqueeLine";
import Container from "../Container";
import { useTranslations } from "next-intl";

export default function WeWorkWith() {
    const t = useTranslations("weWorkWith");

    return (
        <section>
            <Container>
                <h2>{t("title")}</h2>
                <MarqueeLine />
            </Container>
        </section>
    );
}
