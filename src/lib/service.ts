import { defineField, defineType } from "sanity";

export default defineType({
    name: "service",
    title: "Услуга",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Название",
            type: "localizedString",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title.en",
                maxLength: 96,
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: "order",
            title: "Порядок",
            type: "number",
            description:
                "Используется для сортировки услуг. Меньшие числа отображаются первыми.",
        }),
        defineField({
            name: "description",
            title: "Описание",
            type: "localizedBlockContent",
        }),
        defineField({
            name: "gallery",
            title: "Галерея",
            type: "array",
            description: "Галерея изображений",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "image",
                            title: "Изображение",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            validation: rule => rule.required(),
                        },
                        {
                            name: "order",
                            title: "Порядок",
                            type: "number",
                            description:
                                "Используется для сортировки изображений. Меньшие числа отображаются первыми.",
                        },
                    ],
                    preview: {
                        select: {
                            media: "image",
                            order: "order",
                        },
                        prepare({ media, order }) {
                            return {
                                title: `Изображение ${
                                    order !== undefined
                                        ? `(порядок: ${order})`
                                        : ""
                                }`,
                                media: media,
                            };
                        },
                    },
                },
            ],
        }),
        defineField({
            name: "process",
            title: "Процесс",
            type: "localizedBlockContent",
        }),
        defineField({
            name: "pros",
            title: "Преимущества",
            type: "localizedBlockContent",
        }),
        defineField({
            name: "additionalInfo",
            title: "Дополнительная информация",
            type: "localizedBlockContent",
        }),
    ],

    preview: {
        select: {
            title: "title.ru",
            gallery: "gallery",
        },
        prepare({ title, gallery }) {
            return {
                title: title || "Без названия",
                media:
                    gallery && gallery[0] && gallery[0].image
                        ? gallery[0].image
                        : undefined,
            };
        },
    },
});
