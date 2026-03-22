import {defineType, defineField} from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'
import {seoFields, pageGroups} from './seo'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: InfoOutlineIcon,
  groups: pageGroups,
  fields: [
    /* ── General ── */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'About',
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
    defineField({name: 'heroLabel', title: 'Hero Label', type: 'string', group: 'content'}),
    defineField({name: 'heroTitle', title: 'Hero Title', type: 'string', description: 'Supports <em> for emphasis', group: 'content'}),
    defineField({name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', group: 'content'}),
    defineField({name: 'missionLabel', title: 'Mission Section Label', type: 'string', group: 'content'}),
    defineField({name: 'missionTitle', title: 'Mission Section Title', type: 'string', group: 'content'}),
    defineField({name: 'missionBody', title: 'Mission Body', type: 'array', of: [{type: 'block'}, {type: 'videoEmbed'}], group: 'content'}),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
      group: 'content',
    }),
    defineField({name: 'belizeLabel', title: 'Belize Section Label', type: 'string', group: 'content'}),
    defineField({name: 'belizeTitle', title: 'Belize Section Title', type: 'string', group: 'content'}),
    defineField({name: 'belizeBody', title: 'Belize Body', type: 'array', of: [{type: 'block'}, {type: 'videoEmbed'}], group: 'content'}),
    defineField({
      name: 'belizeStats',
      title: 'Belize Statistics',
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
    defineField({name: 'ctaTitle', title: 'CTA Title', type: 'string', group: 'content'}),
    defineField({name: 'ctaBody', title: 'CTA Body', type: 'text', group: 'content'}),

    /* ── SEO ── */
    ...seoFields,
  ],
  preview: {
    prepare: () => ({title: 'About Page'}),
  },
})
