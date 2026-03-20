import {defineType, defineField} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export default defineType({
  name: 'navConfig',
  title: 'Navigation',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'URL', type: 'string'}),
            defineField({
              name: 'children',
              title: 'Sub-Menu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'label', title: 'Label', type: 'string'}),
                    defineField({name: 'href', title: 'URL', type: 'string'}),
                  ],
                  preview: {select: {title: 'label', subtitle: 'href'}},
                },
              ],
            }),
          ],
          preview: {select: {title: 'label', subtitle: 'href'}},
        },
      ],
    }),
    defineField({
      name: 'donateButtonLabel',
      title: 'Donate Button Label',
      type: 'string',
      initialValue: 'Donate',
    }),
    defineField({
      name: 'donateButtonHref',
      title: 'Donate Button URL',
      type: 'string',
      initialValue: '/donate',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Navigation'}),
  },
})
