import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'
import {seoFields, pageGroups} from './seo'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  groups: pageGroups,
  fields: [
    /* ── General ── */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      group: 'general',
    }),

    /* ── Content ── */
    defineField({
      name: 'heroLabel',
      title: 'Hero Kicker Text',
      type: 'string',
      description: 'Small label above the heading (e.g. "Youth Education & Mental Wellness")',
      group: 'content',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'Supports <em> and <br> for styling',
      group: 'content',
    }),
    defineField({
      name: 'heroBody',
      title: 'Hero Body Text',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alt Text', type: 'string', description: 'Describe the image for accessibility'}),
      ],
      group: 'content',
    }),
    defineField({
      name: 'heroCtas',
      title: 'Hero Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
            defineField({name: 'style', title: 'Style', type: 'string', options: {list: ['primary', 'secondary']}}),
          ],
          preview: {select: {title: 'label'}},
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'ribbonItems',
      title: 'Scrolling Ribbon Items',
      type: 'array',
      of: [{type: 'string'}],
      group: 'content',
    }),
    defineField({
      name: 'introLabel',
      title: 'Intro Section Label',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro Section Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'introBody',
      title: 'Intro Section Body',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'introValues',
      title: 'Intro Value Tags',
      type: 'array',
      of: [{type: 'string'}],
      group: 'content',
    }),
    defineField({
      name: 'impactLabel',
      title: 'Impact Section Label',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'impactTitle',
      title: 'Impact Section Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'impactBody',
      title: 'Impact Section Body',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'impactNumbers',
      title: 'Impact Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'style', title: 'Style', type: 'string', options: {list: ['default', 'accent']}}),
          ],
          preview: {select: {title: 'label', subtitle: 'value'}},
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'belizeLabel',
      title: 'Belize Section Label',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'belizeTitle',
      title: 'Belize Section Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'belizeBody',
      title: 'Belize Section Body',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'belizeHighlights',
      title: 'Belize Highlight Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'donateLabel',
      title: 'Donate Section Label',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'donateTitle',
      title: 'Donate Section Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'donateBody',
      title: 'Donate Section Body',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'donationReasons',
      title: 'Donation Reason Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
      group: 'content',
    }),

    /* ── SEO ── */
    ...seoFields,
  ],
  preview: {
    prepare: () => ({title: 'Home Page'}),
  },
})
