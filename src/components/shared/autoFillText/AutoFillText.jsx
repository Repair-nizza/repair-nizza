"use client";

import { useLayoutEffect, useRef, useState, ElementType } from "react";

export default function AutoFitText({
    as,
    min = 12,
    max = 32,
    className,
    style,
    children,
    maxWidth,
    maxHeight,
}) {
    const Component = as || "div";
    const ref = useRef(null);
    const [fontSize, setFontSize] = useState(max);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const original = el.style.fontSize;
        let size = max;

        const fits = () => {
            const width = maxWidth ?? el.clientWidth;
            const height = maxHeight ?? el.clientHeight;

            return el.scrollWidth <= width && el.scrollHeight <= height;
        };

        el.style.fontSize = `${size}px`;

        while (!fits() && size > min) {
            size -= 1;
            el.style.fontSize = `${size}px`;
        }

        setFontSize(size);

        return () => {
            el.style.fontSize = original;
        };
    }, [children, min, max, maxWidth, maxHeight]);

    return (
        <Component
            ref={ref}
            className={className}
            style={{
                ...style,
                fontSize,
                overflow: "hidden",
            }}
        >
            {children}
        </Component>
    );
}
