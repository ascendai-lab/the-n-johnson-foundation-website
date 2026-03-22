import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'videoEmbed',
  title: 'Video Embed',
  type: 'object',
  icon: () => '🎬',
  fields: [
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'Paste a YouTube or Vimeo link (e.g. https://www.youtube.com/watch?v=... or https://vimeo.com/...)',
      validation: (Rule) =>
        Rule.required().uri({scheme: ['https', 'http']}).custom((url) => {
          if (!url) return true
          const isYouTube =
            url.includes('youtube.com/watch') ||
            url.includes('youtu.be/') ||
            url.includes('youtube.com/embed/')
          const isVimeo = url.includes('vimeo.com/')
          if (!isYouTube && !isVimeo) {
            return 'Only YouTube and Vimeo URLs are supported'
          }
          return true
        }),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional text displayed below the video',
    }),
  ],
  preview: {
    select: {title: 'url', subtitle: 'caption'},
    prepare: ({title, subtitle}) => ({
      title: title || 'Video Embed',
      subtitle: subtitle || 'Video',
    }),
  },
})
