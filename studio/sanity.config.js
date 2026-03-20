import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
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
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
