import {defineType, defineField} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'
import {seoFields, pageGroups} from './seo'

export default defineType({
  name: 'partnerPage',
  title: 'Partner Page',
  type: 'document',
  icon: EarthGlobeIcon,
  groups: pageGroups,
  fields: [
    /* ── General ── */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Partner',
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
    defineField({name: 'heroTitle', title: 'Hero Title', type: 'string', group: 'content'}),
    defineField({name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', group: 'content'}),
    defineField({name: 'sectionLabel', title: 'Section Label', type: 'string', group: 'content'}),
    defineField({name: 'sectionTitle', title: 'Section Title', type: 'string', group: 'content'}),
    defineField({
      name: 'partnerTypes',
      title: 'Partner Types',
      type: 'array',
      of: [{type: 'object', fields: [
        defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
      ], preview: {select: {title: 'title'}}}],
      group: 'content',
    }),
    defineField({name: 'benefitsTitle', title: 'Benefits Title', type: 'string', group: 'content'}),
    defineField({
      name: 'benefits',
      title: 'Partner Benefits',
      type: 'array',
      of: [{type: 'string'}],
      group: 'content',
    }),
    defineField({name: 'ctaCardTitle', title: 'CTA Card Title', type: 'string', group: 'content'}),
    defineField({name: 'ctaCardBody', title: 'CTA Card Body', type: 'text', group: 'content'}),

    /* ── SEO ── */
    ...seoFields,
  ],
  preview: {
    prepare: () => ({title: 'Partner Page'}),
  },
})
