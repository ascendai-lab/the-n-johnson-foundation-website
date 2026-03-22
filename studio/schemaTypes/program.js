import {defineType, defineField} from 'sanity'
import {ClipboardIcon} from '@sanity/icons'
import {seoFields, pageGroups} from './seo'

export default defineType({
  name: 'program',
  title: 'Programs',
  type: 'document',
  icon: ClipboardIcon,
  groups: pageGroups,
  fields: [
    /* ── General ── */
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      description: 'This becomes the page URL: /programs/[slug]',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),

    /* ── Content ── */
    defineField({
      name: 'icon',
      title: 'Lucide Icon Name',
      type: 'string',
      description: 'e.g. graduation-cap, box, brain, school, users-round',
      group: 'content',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Shown on program cards (1-2 sentences)',
      group: 'content',
    }),
    defineField({
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
      initialValue: 'Programs',
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
      name: 'detailHeading',
      title: 'Detail Section Heading',
      type: 'array',
      of: [{type: 'block'}, {type: 'videoEmbed'}],
      group: 'content',
    }),
    defineField({
      name: 'detailBody',
      title: 'Detail Section Body',
      type: 'array',
      of: [{type: 'block'}, {type: 'videoEmbed'}],
      group: 'content',
    }),
    defineField({
      name: 'detailSubhead',
      title: 'Detail Checklist Subhead',
      type: 'string',
      description: 'e.g. "What the Scholarship Covers:"',
      group: 'content',
    }),
    defineField({
      name: 'detailItems',
      title: 'Detail Checklist Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
            defineField({name: 'text', title: 'Text', type: 'string'}),
          ],
          preview: {select: {title: 'text'}},
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'sidebarStats',
      title: 'Sidebar Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'suffix', title: 'Suffix', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
          preview: {select: {title: 'label', subtitle: 'value'}},
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'sidebarQuote',
      title: 'Sidebar Quote',
      type: 'object',
      fields: [
        defineField({name: 'text', title: 'Quote Text', type: 'text'}),
        defineField({name: 'attribution', title: 'Attribution', type: 'string'}),
      ],
      group: 'content',
    }),
    defineField({
      name: 'sidebarInfoCards',
      title: 'Sidebar Info Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'body', title: 'Body', type: 'text'}),
            defineField({name: 'linkHref', title: 'Link URL', type: 'string'}),
            defineField({name: 'linkLabel', title: 'Link Label', type: 'string'}),
            defineField({name: 'style', title: 'Style', type: 'string', options: {list: ['default', 'purple']}}),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      description: 'Supports <em> for styled emphasis',
      group: 'content',
    }),
    defineField({
      name: 'ctaBody',
      title: 'CTA Section Body',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'wash',
      title: 'Page Color Wash',
      type: 'string',
      options: {list: ['teal', 'purple', 'none']},
      initialValue: 'none',
      group: 'content',
    }),
    defineField({
      name: 'linkLabel',
      title: 'Card Link Label',
      type: 'string',
      description: 'e.g. "Learn more" or "Coming soon"',
      group: 'content',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL (optional)',
      type: 'url',
      description: 'If set, the card links here instead of the detail page',
      group: 'content',
    }),
    defineField({
      name: 'isComingSoon',
      title: 'Coming Soon?',
      type: 'boolean',
      initialValue: false,
      group: 'content',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'content',
    }),

    /* ── SEO ── */
    ...seoFields,
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'shortDescription'},
  },
})
