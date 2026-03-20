import {defineType, defineField} from 'sanity'
import {ComposeIcon} from '@sanity/icons'
import {seoFields, pageGroups} from './seo'

export default defineType({
  name: 'customPage',
  title: 'Custom Pages',
  type: 'document',
  icon: ComposeIcon,
  groups: pageGroups,
  fields: [
    /* ── General ── */
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      description: 'This becomes the page URL, e.g. /scholarship-application',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'wash',
      title: 'Page Color Wash',
      type: 'string',
      options: {list: ['teal', 'purple', 'none']},
      initialValue: 'none',
      group: 'general',
    }),

    /* ── Content ── */
    defineField({
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
      description: 'Small text above the hero title',
      group: 'content',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Supports <em> for styled emphasis',
      group: 'content',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      group: 'content',
    }),

    defineField({
      name: 'sections',
      title: 'Page Sections',
      description: 'Add and arrange content blocks to build your page layout.',
      type: 'array',
      group: 'content',
      of: [
        /* ── Text Section ── */
        {
          type: 'object',
          name: 'textSection',
          title: 'Text Section',
          icon: () => '📝',
          fields: [
            defineField({name: 'label', title: 'Section Label', type: 'string', description: 'Small text above the heading (optional)'}),
            defineField({name: 'heading', title: 'Heading', type: 'string', description: 'Supports <em> for emphasis'}),
            defineField({name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]}),
          ],
          preview: {
            select: {title: 'heading', subtitle: 'label'},
            prepare: ({title, subtitle}) => ({title: title || 'Text Section', subtitle: subtitle ? `${subtitle} — Text` : 'Text Section'}),
          },
        },

        /* ── Cards Grid ── */
        {
          type: 'object',
          name: 'cardsGrid',
          title: 'Cards Grid',
          icon: () => '🃏',
          fields: [
            defineField({name: 'label', title: 'Section Label', type: 'string'}),
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2}),
            defineField({
              name: 'columns',
              title: 'Columns',
              type: 'number',
              options: {list: [2, 3, 4]},
              initialValue: 3,
              description: 'Number of cards per row on desktop',
            }),
            defineField({
              name: 'cards',
              title: 'Cards',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'icon', title: 'Lucide Icon', type: 'string', description: 'e.g. heart, users, graduation-cap'}),
                    defineField({name: 'title', title: 'Title', type: 'string'}),
                    defineField({name: 'description', title: 'Description', type: 'text'}),
                    defineField({name: 'linkHref', title: 'Link URL (optional)', type: 'string'}),
                    defineField({name: 'linkLabel', title: 'Link Label (optional)', type: 'string'}),
                  ],
                  preview: {select: {title: 'title', subtitle: 'description'}},
                },
              ],
            }),
          ],
          preview: {
            select: {title: 'heading', count: 'cards'},
            prepare: ({title, count}) => ({title: title || 'Cards Grid', subtitle: `Cards Grid — ${count?.length || 0} cards`}),
          },
        },

        /* ── Stats Row ── */
        {
          type: 'object',
          name: 'statsRow',
          title: 'Stats Row',
          icon: () => '📊',
          fields: [
            defineField({name: 'label', title: 'Section Label', type: 'string'}),
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({name: 'body', title: 'Body Text', type: 'text', rows: 2}),
            defineField({
              name: 'stats',
              title: 'Statistics',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'value', title: 'Value', type: 'string', description: 'e.g. 30+, $5K, 100%'}),
                    defineField({name: 'label', title: 'Label', type: 'string'}),
                  ],
                  preview: {select: {title: 'value', subtitle: 'label'}},
                },
              ],
            }),
          ],
          preview: {
            select: {title: 'heading'},
            prepare: ({title}) => ({title: title || 'Stats Row', subtitle: 'Stats Row'}),
          },
        },

        /* ── CTA Banner ── */
        {
          type: 'object',
          name: 'ctaBanner',
          title: 'CTA Banner',
          icon: () => '📢',
          fields: [
            defineField({name: 'heading', title: 'Heading', type: 'string', description: 'Supports <em> for emphasis'}),
            defineField({name: 'body', title: 'Body', type: 'text'}),
            defineField({name: 'buttonLabel', title: 'Button Label', type: 'string'}),
            defineField({name: 'buttonHref', title: 'Button URL', type: 'string'}),
            defineField({
              name: 'style',
              title: 'Style',
              type: 'string',
              options: {list: ['default', 'teal', 'purple']},
              initialValue: 'default',
            }),
          ],
          preview: {
            select: {title: 'heading'},
            prepare: ({title}) => ({title: title || 'CTA Banner', subtitle: 'CTA Banner'}),
          },
        },

        /* ── FAQ Accordion ── */
        {
          type: 'object',
          name: 'faqAccordion',
          title: 'FAQ Accordion',
          icon: () => '❓',
          fields: [
            defineField({name: 'label', title: 'Section Label', type: 'string'}),
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({
              name: 'items',
              title: 'FAQ Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'question', title: 'Question', type: 'string'}),
                    defineField({name: 'answer', title: 'Answer', type: 'text'}),
                  ],
                  preview: {select: {title: 'question'}},
                },
              ],
            }),
          ],
          preview: {
            select: {title: 'heading', count: 'items'},
            prepare: ({title, count}) => ({title: title || 'FAQ', subtitle: `FAQ — ${count?.length || 0} items`}),
          },
        },

        /* ── Image Gallery ── */
        {
          type: 'object',
          name: 'imageGallery',
          title: 'Image Gallery',
          icon: () => '🖼',
          fields: [
            defineField({name: 'label', title: 'Section Label', type: 'string'}),
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({
              name: 'columns',
              title: 'Columns',
              type: 'number',
              options: {list: [2, 3, 4]},
              initialValue: 3,
            }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
                    defineField({name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule) => Rule.required()}),
                    defineField({name: 'caption', title: 'Caption', type: 'string'}),
                  ],
                  preview: {select: {title: 'alt', subtitle: 'caption', media: 'image'}},
                },
              ],
            }),
          ],
          preview: {
            select: {title: 'heading', count: 'images'},
            prepare: ({title, count}) => ({title: title || 'Image Gallery', subtitle: `Gallery — ${count?.length || 0} images`}),
          },
        },

        /* ── Checklist ── */
        {
          type: 'object',
          name: 'checklist',
          title: 'Checklist',
          icon: () => '✅',
          fields: [
            defineField({name: 'label', title: 'Section Label', type: 'string'}),
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({name: 'body', title: 'Intro Text', type: 'text', rows: 2}),
            defineField({
              name: 'items',
              title: 'Checklist Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'icon', title: 'Lucide Icon (optional)', type: 'string'}),
                    defineField({name: 'text', title: 'Text', type: 'string'}),
                  ],
                  preview: {select: {title: 'text'}},
                },
              ],
            }),
          ],
          preview: {
            select: {title: 'heading', count: 'items'},
            prepare: ({title, count}) => ({title: title || 'Checklist', subtitle: `Checklist — ${count?.length || 0} items`}),
          },
        },

        /* ── Rich Text Block ── */
        {
          type: 'object',
          name: 'richText',
          title: 'Rich Text',
          icon: () => '📄',
          fields: [
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}, {type: 'image', options: {hotspot: true}, fields: [defineField({name: 'alt', title: 'Alt Text', type: 'string'})]}],
            }),
          ],
          preview: {
            prepare: () => ({title: 'Rich Text Block', subtitle: 'Free-form content'}),
          },
        },
      ],
    }),

    /* ── SEO ── */
    ...seoFields,
  ],
  orderings: [
    {title: 'Title (A-Z)', name: 'titleAsc', by: [{field: 'title', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
    prepare: ({title, subtitle}) => ({title, subtitle: subtitle ? `/${subtitle}` : ''}),
  },
})
