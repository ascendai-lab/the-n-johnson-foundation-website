import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'
import {seoFields, pageGroups} from './seo'

export default defineType({
  name: 'legalPage',
  title: 'Legal Pages',
  type: 'document',
  icon: DocumentTextIcon,
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
      description: 'e.g. "privacy" or "terms"',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),

    /* ── Content ── */
    defineField({name: 'heroLabel', title: 'Hero Label', type: 'string', initialValue: 'Legal', group: 'content'}),
    defineField({name: 'heroTitle', title: 'Hero Title', type: 'string', group: 'content'}),
    defineField({name: 'lastUpdated', title: 'Last Updated', type: 'date', group: 'content'}),
    defineField({
      name: 'body',
      title: 'Page Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'videoEmbed'}],
      group: 'content',
    }),

    /* ── SEO ── */
    ...seoFields,
  ],
  preview: {
    select: {title: 'title'},
  },
})
