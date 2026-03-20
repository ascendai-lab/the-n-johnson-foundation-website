import {defineType, defineField} from 'sanity'
import {TargetIcon} from '@sanity/icons'
import {seoFields, pageGroups} from './seo'

export default defineType({
  name: 'coachingPage',
  title: 'Coaching Page',
  type: 'document',
  icon: TargetIcon,
  groups: pageGroups,
  fields: [
    /* ── General ── */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Coaching',
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
    defineField({name: 'introLabel', title: 'Intro Label', type: 'string', group: 'content'}),
    defineField({name: 'introTitle', title: 'Intro Title', type: 'string', group: 'content'}),
    defineField({name: 'introBody', title: 'Intro Body', type: 'array', of: [{type: 'block'}], group: 'content'}),
    defineField({
      name: 'highlights',
      title: 'Intro Highlights',
      type: 'array',
      of: [{type: 'object', fields: [
        defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
        defineField({name: 'text', title: 'Text', type: 'string'}),
      ], preview: {select: {title: 'text'}}}],
      group: 'content',
    }),
    defineField({name: 'focusLabel', title: 'Focus Areas Label', type: 'string', group: 'content'}),
    defineField({name: 'focusTitle', title: 'Focus Areas Title', type: 'string', group: 'content'}),
    defineField({
      name: 'focusAreas',
      title: 'Focus Areas',
      type: 'array',
      of: [{type: 'object', fields: [
        defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
      ], preview: {select: {title: 'title'}}}],
      group: 'content',
    }),
    defineField({name: 'audienceLabel', title: 'Audience Section Label', type: 'string', group: 'content'}),
    defineField({name: 'audienceTitle', title: 'Audience Section Title', type: 'string', group: 'content'}),
    defineField({
      name: 'audiences',
      title: 'Target Audiences',
      type: 'array',
      of: [{type: 'object', fields: [
        defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
      ], preview: {select: {title: 'title'}}}],
      group: 'content',
    }),
    defineField({name: 'bookingLabel', title: 'Booking Section Label', type: 'string', group: 'content'}),
    defineField({name: 'bookingTitle', title: 'Booking Section Title', type: 'string', group: 'content'}),
    defineField({name: 'bookingBody', title: 'Booking Body', type: 'text', group: 'content'}),
    defineField({
      name: 'bookingDetails',
      title: 'Booking Detail Items',
      type: 'array',
      of: [{type: 'object', fields: [
        defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
        defineField({name: 'text', title: 'Text', type: 'string'}),
      ], preview: {select: {title: 'text'}}}],
      group: 'content',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      of: [{type: 'object', fields: [
        defineField({name: 'question', title: 'Question', type: 'string'}),
        defineField({name: 'answer', title: 'Answer', type: 'text'}),
      ], preview: {select: {title: 'question'}}}],
      group: 'content',
    }),
    defineField({name: 'ctaTitle', title: 'Bottom CTA Title', type: 'string', group: 'content'}),
    defineField({name: 'ctaBody', title: 'Bottom CTA Body', type: 'text', group: 'content'}),

    /* ── SEO ── */
    ...seoFields,
  ],
  preview: {
    prepare: () => ({title: 'Coaching Page'}),
  },
})
