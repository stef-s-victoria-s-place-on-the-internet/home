import * as _ from 'lodash'

export default async ({ $axios, from }) => {
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

    if (!_.values(publication).paid) {
      // TODO: show notice in UI
      console.log('payment incomplete')
      return
    }

    const title = Object.keys(publication)

    switch (title[0]) {
      case 'ingrid':
        redirectWindow('/publications/poetics-and-politics-of-erasure')
        break
      case 'karina':
        redirectWindow(
          '/publications/artificial-intelligence-never-has-a-headache'
        )
        break
      case 'sophieeline':
        redirectWindow('/publications/radio-techno-fossil')
        break
      case 'lisa':
        redirectWindow('/publications/meaning-seeking-animals')
        break

      default:
        break
    }
  } catch (err) {
    console.log('error in authLink', err)
  }
}

const redirectWindow = (route) => {
  window.onNuxtReady(() => {
    window.$nuxt.$router.push(route)
  })
}

const isSuccess = ({ path }) => {
  return path.includes('success')
}
