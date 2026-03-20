import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '1zx880ik',
    dataset: 'production'
  },
  studioHost: 'njf-cms',
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    appId: 'csmks16q7m61nev8kf0esy06',
    autoUpdates: true,
  }
})
