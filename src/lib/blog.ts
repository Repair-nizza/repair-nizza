import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Блог',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Дата публикации',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Время чтения (минуты)',
      type: 'number',
      description: 'Примерное время чтения статьи в минутах',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'mainImage',
      title: 'Главное изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Содержание блога',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'titleText',
          title: 'Заголовок и текст',
          fields: [
            {
              name: 'title',
              title: 'Заголовок',
              type: 'localizedString',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'localizedBlockContent',
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title.ru',
            },
          },
        },
        {
          type: 'object',
          name: 'listBlock',
          title: 'Блок списка',
          fields: [
            {
              name: 'title',
              title: 'Заголовок',
              type: 'localizedString',
              validation: (rule) => rule.required(),
            },
            {
              name: 'items',
              title: 'Элементы списка',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Заголовок',
                      type: 'localizedString',
                      validation: (rule) => rule.required(),
                    },
                    {
                      name: 'description',
                      title: 'Описание',
                      type: 'localizedBlockContent',
                      validation: (rule) => rule.required(),
                    },
                  ],
                },
              ],
              validation: (rule) => rule.required().min(1),
            },
          ],
          preview: {
            select: {
              title: 'title.ru',
            },
          },
        },
        {
          type: 'object',
          name: 'conclusionBlock',
          title: 'Блок заключения',
          fields: [
            {
              name: 'title',
              title: 'Заголовок',
              type: 'localizedString',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'localizedBlockContent',
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title.ru',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея изображений',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title.ru',
      subtitle: 'date',
      media: 'mainImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Без названия',
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('ru-RU') : 'Без даты',
        media,
      }
    },
  },
})

