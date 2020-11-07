import * as _ from 'lodash'

export default async ({ $axios, from }) => {
  try {
    if (!process.client || _.isEmpty(from.query)) {
      return
    }

    const id = from.query.id.split('-').pop()

    const publication = await $axios.$post('/api/v2/link', {id})

    if (_.isEmpty(publication)) {
      console.log('empty')
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

function redirectWindow(route) {
  window.onNuxtReady(() => {
    window.$nuxt.$router.push(route)
  })
}
// // https://www.oneacre.online/?id=ingrid-instagram-K1543515802358
// 48010513293185144
// http://localhost:3000/publications/meaning-seeking-animals/?id=ingrid-instagram-K1543515802358

// http://localhost:3000/publications/meaning-seeking-animals/?id=ingrid-instagram-48010513293185144
