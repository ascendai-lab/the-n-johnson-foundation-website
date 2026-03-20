import {defineType, defineField} from 'sanity'
import {HeartIcon} from '@sanity/icons'
import {seoFields, pageGroups} from './seo'

export default defineType({
  name: 'donatePage',
  title: 'Donate Page',
  type: 'document',
  icon: HeartIcon,
  groups: pageGroups,
  fields: [
    /* ── General ── */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Donate',
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
    defineField({
      name: 'donationTiers',
      title: 'Donation Tiers',
      type: 'array',
      of: [{type: 'object', fields: [
        defineField({name: 'amount', title: 'Amount ($)', type: 'number'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
        defineField({name: 'isFeatured', title: 'Featured?', type: 'boolean', initialValue: false}),
      ], preview: {select: {title: 'title', subtitle: 'amount'}}}],
      group: 'content',
    }),
    defineField({name: 'howItHelpsLabel', title: 'How It Helps Label', type: 'string', group: 'content'}),
    defineField({name: 'howItHelpsTitle', title: 'How It Helps Title', type: 'string', group: 'content'}),
    defineField({name: 'howItHelpsBody', title: 'How It Helps Body', type: 'text', group: 'content'}),
    defineField({
      name: 'howItHelpsList',
      title: 'How It Helps List Items',
      type: 'array',
      of: [{type: 'string'}],
      group: 'content',
    }),
    defineField({name: 'bookCardTitle', title: 'Book Card Title', type: 'string', group: 'content'}),
    defineField({name: 'bookCardBody', title: 'Book Card Body', type: 'text', group: 'content'}),
    defineField({name: 'ctaTitle', title: 'Bottom CTA Title', type: 'string', group: 'content'}),
    defineField({name: 'ctaBody', title: 'Bottom CTA Body', type: 'text', group: 'content'}),

    /* ── SEO ── */
    ...seoFields,
  ],
  preview: {
    prepare: () => ({title: 'Donate Page'}),
  },
})
