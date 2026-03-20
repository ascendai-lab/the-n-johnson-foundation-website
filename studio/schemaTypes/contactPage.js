import {defineType, defineField} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'
import {seoFields, pageGroups} from './seo'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: EnvelopeIcon,
  groups: pageGroups,
  fields: [
    /* ── General ── */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Contact',
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
    defineField({name: 'formHeading', title: 'Form Heading', type: 'string', group: 'content'}),
    defineField({
      name: 'sidebarCards',
      title: 'Sidebar Info Cards',
      type: 'array',
      of: [{type: 'object', fields: [
        defineField({name: 'icon', title: 'Lucide Icon', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'body', title: 'Body', type: 'text'}),
      ], preview: {select: {title: 'title'}}}],
      group: 'content',
    }),

    /* ── SEO ── */
    ...seoFields,
  ],
  preview: {
    prepare: () => ({title: 'Contact Page'}),
  },
})
