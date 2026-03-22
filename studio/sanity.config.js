import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {
  DocumentIcon,
  ComposeIcon,
  ClipboardIcon,
  CalendarIcon,
  UserIcon,
  MenuIcon,
  CogIcon,
} from '@sanity/icons'

/* ── Helpers ── */

/** Singleton: clicking the item opens the document editor directly (no list). */
function singletonListItem(S, typeName, title, icon) {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(typeName).documentId(typeName))
}

/* ── Route Resolver ── */

/** Maps document types to their frontend URLs for the Presentation tool. */
function resolveProductionUrl(doc) {
  switch (doc._type) {
    case 'homePage':
      return '/'
    case 'aboutPage':
      return '/about'
    case 'coachingPage':
      return '/coaching'
    case 'donatePage':
      return '/donate'
    case 'volunteerPage':
      return '/volunteer'
    case 'partnerPage':
      return '/partner'
    case 'contactPage':
      return '/contact'
    case 'program':
      return doc?.slug?.current ? `/programs/${doc.slug.current}` : '/programs'
    case 'event':
      return doc?.slug?.current ? `/events/${doc.slug.current}` : '/events'
    case 'legalPage':
      return doc?.slug?.current ? `/${doc.slug.current}` : '/'
    case 'customPage':
      return doc?.slug?.current ? `/${doc.slug.current}` : '/'
    default:
      return '/'
  }
}

/* ── Structure Builder ── */

const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      /* ── Pages (folder) ── */
      S.listItem()
        .title('Pages')
        .icon(DocumentIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              singletonListItem(S, 'homePage', 'Home', DocumentIcon),
              singletonListItem(S, 'aboutPage', 'About', DocumentIcon),
              singletonListItem(S, 'coachingPage', 'Coaching', DocumentIcon),
              singletonListItem(S, 'donatePage', 'Donate', DocumentIcon),
              singletonListItem(S, 'volunteerPage', 'Volunteer', DocumentIcon),
              singletonListItem(S, 'partnerPage', 'Partner', DocumentIcon),
              singletonListItem(S, 'contactPage', 'Contact', DocumentIcon),
              S.listItem()
                .title('Legal Pages')
                .icon(DocumentIcon)
                .child(S.documentTypeList('legalPage').title('Legal Pages')),
            ]),
        ),

      /* ── Custom Pages ── */
      S.listItem()
        .title('Custom Pages')
        .icon(ComposeIcon)
        .child(S.documentTypeList('customPage').title('Custom Pages')),

      S.divider(),

      /* ── Programs ── */
      S.listItem()
        .title('Programs')
        .icon(ClipboardIcon)
        .child(S.documentTypeList('program').title('Programs')),

      /* ── Events ── */
      S.listItem()
        .title('Events')
        .icon(CalendarIcon)
        .child(S.documentTypeList('event').title('Events')),

      /* ── Team ── */
      S.listItem()
        .title('Team')
        .icon(UserIcon)
        .child(S.documentTypeList('teamMember').title('Team Members')),

      S.divider(),

      /* ── Navigation (singleton) ── */
      singletonListItem(S, 'navConfig', 'Navigation', MenuIcon),

      /* ── Site Settings (singleton) ── */
      singletonListItem(S, 'siteSettings', 'Site Settings', CogIcon),
    ])

export default defineConfig({
  name: 'default',
  title: 'The N Johnson Foundation',

  projectId: '1zx880ik',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl: 'https://thenjohnsonfoundation.org',
      resolve: {
        locations: {
          homePage: {select: {}, resolve: resolveProductionUrl},
          aboutPage: {select: {}, resolve: resolveProductionUrl},
          coachingPage: {select: {}, resolve: resolveProductionUrl},
          donatePage: {select: {}, resolve: resolveProductionUrl},
          volunteerPage: {select: {}, resolve: resolveProductionUrl},
          partnerPage: {select: {}, resolve: resolveProductionUrl},
          contactPage: {select: {}, resolve: resolveProductionUrl},
          program: {select: {slug: 'slug.current'}, resolve: resolveProductionUrl},
          event: {select: {slug: 'slug.current'}, resolve: resolveProductionUrl},
          legalPage: {select: {slug: 'slug.current'}, resolve: resolveProductionUrl},
          customPage: {select: {slug: 'slug.current'}, resolve: resolveProductionUrl},
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
