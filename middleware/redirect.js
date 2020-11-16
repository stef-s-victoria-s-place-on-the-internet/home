import * as _ from 'lodash'
import { getPublicationRoute } from '../helpers'

export default async ({ $axios, from, route }) => {
  try {
    // catch server side
    // catch empty query
    if (!process.client) {
      return
    }

    const options = [
      '/annoucement',
      '/annoucement',
      '/anouncement',
      '/announcement',
      '/announecement',
      '/announement',
      '/annoucment',
    ]

    if (options.includes(route.path)) {
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/catalog/announcement')
      })
    }
  } catch (err) {
    console.log(`redirect error for ${route}`, err)
  }
}
