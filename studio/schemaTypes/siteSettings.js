import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'foundationName',
      title: 'Foundation Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Displayed in footer, contact page, and legal pages',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({name: 'street', title: 'Street', type: 'string'}),
        defineField({name: 'unit', title: 'Unit', type: 'string'}),
        defineField({name: 'city', title: 'City', type: 'string'}),
        defineField({name: 'state', title: 'State', type: 'string'}),
        defineField({name: 'zip', title: 'ZIP Code', type: 'string'}),
      ],
    }),
    defineField({
      name: 'foundationDescription',
      title: 'Foundation Description',
      type: 'text',
      description: 'Short description used in the footer',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      description: 'Add only the platforms you use. Click "+ Add item" to add a new profile.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Twitter / X', value: 'twitter'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'TikTok', value: 'tiktok'},
                  {title: 'Pinterest', value: 'pinterest'},
                  {title: 'Threads', value: 'threads'},
                  {title: 'Snapchat', value: 'snapchat'},
                  {title: 'WhatsApp', value: 'whatsapp'},
                  {title: 'Telegram', value: 'telegram'},
                  {title: 'Discord', value: 'discord'},
                  {title: 'Bluesky', value: 'bluesky'},
                  {title: 'Mastodon', value: 'mastodon'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Profile URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'platform', subtitle: 'url'},
            prepare: ({title, subtitle}) => {
              const labels = {
                facebook: 'Facebook',
                instagram: 'Instagram',
                twitter: 'Twitter / X',
                linkedin: 'LinkedIn',
                youtube: 'YouTube',
                tiktok: 'TikTok',
                pinterest: 'Pinterest',
                threads: 'Threads',
                snapchat: 'Snapchat',
                whatsapp: 'WhatsApp',
                telegram: 'Telegram',
                discord: 'Discord',
                bluesky: 'Bluesky',
                mastodon: 'Mastodon',
              }
              return {title: labels[title] || title, subtitle}
            },
          },
        },
      ],
    }),
    defineField({
      name: 'amazonBookLink',
      title: 'Amazon Book Link',
      type: 'url',
    }),
    defineField({
      name: 'calComLink',
      title: 'Cal.com Booking Link',
      type: 'string',
      description: 'e.g. nicole-johnson-peer/30min',
    }),
    defineField({
      name: 'zeffyDonationUrl',
      title: 'Zeffy Donation Form URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Site Settings'}),
  },
})
