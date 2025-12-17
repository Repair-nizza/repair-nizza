"use client";

import Image from "next/image";

const BlockContentRenderer = ({ content, className = "" }) => {
    if (!content) return null;

    if (typeof content === "string") {
        return <p className={className}>{content}</p>;
    }

    if (!Array.isArray(content)) return null;

    const renderMarks = (child, markDefs = []) => {
        if (!child.marks || child.marks.length === 0) {
            return child.text;
        }

        let element = child.text;

        const marks = [...child.marks].reverse();

        marks.forEach(mark => {
            if (typeof mark === "string") {
                if (mark === "strong") {
                    element = <strong key={Math.random()}>{element}</strong>;
                } else if (mark === "em") {
                    element = <em key={Math.random()}>{element}</em>;
                } else if (markDefs.length > 0) {
                    const markDef = markDefs.find(def => def._key === mark);
                    if (markDef && markDef._type === "link" && markDef.href) {
                        element = (
                            <a
                                key={Math.random()}
                                href={markDef.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                {element}
                            </a>
                        );
                    }
                }
            } else if (
                mark &&
                typeof mark === "object" &&
                mark._type === "link" &&
                mark.href
            ) {
                element = (
                    <a
                        key={Math.random()}
                        href={mark.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        {element}
                    </a>
                );
            }
        });

        return element;
    };

    const renderChildren = (children, markDefs = []) => {
        if (!children || !Array.isArray(children)) return "";
        return children.map((child, idx) => (
            <span key={idx}>{renderMarks(child, markDefs)}</span>
        ));
    };

    const elements = [];
    let currentListItems = [];
    let listItemType = null;

    content.forEach((block, index) => {
        if (!block) return;

        if (block._type === "image" && block.asset) {
            if (currentListItems.length > 0) {
                const ListTag = listItemType === "number" ? "ol" : "ul";
                elements.push(
                    <ListTag
                        key={`list-${index}`}
                        className={`list-disc list-inside space-y-1 mb-2 ml-4 ${
                            className ||
                            "font-montserrat font-light text-xs text-primary-black"
                        }`}
                    >
                        {currentListItems.map((item, itemIndex) => {
                            const markDefs = item.markDefs || [];
                            return (
                                <li key={itemIndex}>
                                    {renderChildren(item.children, markDefs)}
                                </li>
                            );
                        })}
                    </ListTag>
                );
                currentListItems = [];
                listItemType = null;
            }

            const imageUrl = block.asset.url;
            if (imageUrl) {
                elements.push(
                    <div key={index} className="my-4">
                        <Image
                            src={imageUrl}
                            alt={block.alt || ""}
                            width={
                                block.asset.metadata?.dimensions?.width || 800
                            }
                            height={
                                block.asset.metadata?.dimensions?.height || 600
                            }
                            className="rounded-lg"
                        />
                    </div>
                );
            }
            return;
        }

        if (block._type === "block") {
            if (block.listItem) {
                if (
                    currentListItems.length > 0 &&
                    listItemType !== block.listItem
                ) {
                    const ListTag = listItemType === "number" ? "ol" : "ul";
                    elements.push(
                        <ListTag
                            key={`list-${index}`}
                            className={`list-disc list-inside space-y-1 mb-2 ml-4 ${
                                className ||
                                "font-montserrat font-light text-xs text-primary-black"
                            }`}
                        >
                            {currentListItems.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    {renderChildren(item.children)}
                                </li>
                            ))}
                        </ListTag>
                    );
                    currentListItems = [];
                }
                currentListItems.push(block);
                listItemType = block.listItem;
            } else {
                if (currentListItems.length > 0) {
                    const ListTag = listItemType === "number" ? "ol" : "ul";
                    elements.push(
                        <ListTag
                            key={`list-${index}`}
                            className={`list-disc list-inside space-y-1 mb-2 ml-4 ${
                                className ||
                                "font-montserrat font-light text-xs text-primary-black"
                            }`}
                        >
                            {currentListItems.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    {renderChildren(item.children)}
                                </li>
                            ))}
                        </ListTag>
                    );
                    currentListItems = [];
                    listItemType = null;
                }

                const style = block.style || "normal";
                const markDefs = block.markDefs || [];
                const children = renderChildren(block.children, markDefs);

                if (
                    !children ||
                    (typeof children === "string" && !children.trim())
                ) {
                    return;
                }

                const baseClassName =
                    className ||
                    "font-montserrat font-light text-xs text-primary-black";

                switch (style) {
                    case "h1":
                        elements.push(
                            <h1
                                key={index}
                                className={`${baseClassName} font-bold mb-2`}
                            >
                                {children}
                            </h1>
                        );
                        break;
                    case "h2":
                        elements.push(
                            <h2
                                key={index}
                                className={`${baseClassName} font-bold mb-2`}
                            >
                                {children}
                            </h2>
                        );
                        break;
                    case "h3":
                        elements.push(
                            <h3
                                key={index}
                                className={`${baseClassName} font-bold mb-2`}
                            >
                                {children}
                            </h3>
                        );
                        break;
                    case "h4":
                        elements.push(
                            <h4
                                key={index}
                                className={`${baseClassName} font-bold mb-2`}
                            >
                                {children}
                            </h4>
                        );
                        break;
                    case "blockquote":
                        elements.push(
                            <blockquote
                                key={index}
                                className={`${baseClassName} border-l-4 pl-4 italic my-2`}
                            >
                                {children}
                            </blockquote>
                        );
                        break;
                    default:
                        elements.push(
                            <p key={index} className={baseClassName}>
                                {children}
                            </p>
                        );
                }
            }
        }
    });

    if (currentListItems.length > 0) {
        const ListTag = listItemType === "number" ? "ol" : "ul";
        elements.push(
            <ListTag
                key={`list-end`}
                className={`list-disc list-inside space-y-1 ml-4 ${
                    className ||
                    "font-montserrat font-light text-xs text-primary-black"
                }`}
            >
                {currentListItems.map((item, itemIndex) => {
                    const markDefs = item.markDefs || [];
                    return (
                        <li
                            key={itemIndex}
                            className="relative before:content-[''] before:block before:w-1 before:h-1 before:bg-primary-black before:rounded-full before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2"
                        >
                            {renderChildren(item.children, markDefs)}
                        </li>
                    );
                })}
            </ListTag>
        );
    }

    if (elements.length === 0) return null;

    return <div>{elements}</div>;
};

export default BlockContentRenderer;
