import {defineField} from 'sanity'

/**
 * Reusable SEO fields — spread into any schema's `fields` array.
 * All fields are assigned to the 'seo' group.
 */
export const seoFields = [
  defineField({
    name: 'metaTitle',
    title: 'Meta Title',
    type: 'string',
    description: 'Overrides the page title in search results. Keep under 60 characters.',
    group: 'seo',
  }),
  defineField({
    name: 'metaDescription',
    title: 'Meta Description',
    type: 'text',
    rows: 3,
    description: 'Shown in Google search results. Keep under 160 characters.',
    validation: (Rule) => Rule.max(160).warning('Meta descriptions over 160 characters may be truncated in search results.'),
    group: 'seo',
  }),
  defineField({
    name: 'ogImage',
    title: 'Open Graph Image',
    type: 'image',
    description: 'Image displayed when the page is shared on social media (1200x630 recommended).',
    options: {hotspot: true},
    fields: [
      defineField({
        name: 'alt',
        title: 'Alt Text',
        type: 'string',
        description: 'Describe the image for accessibility',
      }),
    ],
    group: 'seo',
  }),
  defineField({
    name: 'focusKeyword',
    title: 'Focus Keyword',
    type: 'string',
    description: 'Editorial reference — not output to HTML.',
    group: 'seo',
  }),
  defineField({
    name: 'noindex',
    title: 'Hide from Search Engines',
    type: 'boolean',
    description: 'When enabled, search engines will be asked not to index this page.',
    initialValue: false,
    group: 'seo',
  }),
]

/**
 * Standard group definitions for page schemas.
 */
export const pageGroups = [
  {name: 'general', title: 'General', default: true},
  {name: 'content', title: 'Content'},
  {name: 'seo', title: 'SEO'},
]
