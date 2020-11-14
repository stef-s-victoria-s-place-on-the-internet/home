import * as _ from 'lodash'
import { getPublicationRoute } from '../helpers'

export default async ({ $axios, from, route }) => {
  try {
    // catch server side
    // catch empty query
    if (!process.client || _.isEmpty(from.query) || isSuccess(from)) {
      return
    }

    const id = from.query.id.split('-').pop()

    const publication = await $axios.$post('/link', { id })

    if (_.isEmpty(publication)) {
      console.log('empty')
      return
    }

    if (!_.values(publication).pop().paid) {
      // TODO: show notice in UI
      console.log('payment incomplete')
      return
    }

    const title = _.keys(publication).pop()
    let path = undefined

    path = getPublicationRoute(title, path)

    redirectWindow(path, id, route)
  } catch (err) {
    console.log('error in authLink', err)
  }
}

const redirectWindow = (path = '', id, route) => {
  const redirectPath = `${path}?id=${id}`
  // if we are already here, don't redirect
  if (route.fullPath === redirectPath) {
    return
  }

  window.onNuxtReady(() => {
    window.$nuxt.$router.push(redirectPath)
  })
}

const isSuccess = ({ path }) => {
  return path.includes('success')
}


