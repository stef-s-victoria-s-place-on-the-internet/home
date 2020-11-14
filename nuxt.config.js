import Mode from 'frontmatter-markdown-loader/mode'
import { markdownCustomCompiler } from './helpers/markdownCustomCompiler'

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://oneacre.online'

const siteMeta = {
  title: 'oneacre.online',
  description:
    'oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works.',
  image: 'http://www.oneacre.online/images/ingrid/oa_meta_img.jpg',
}

export default {
  ssr: false,
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: siteMeta.title,
    titleTemplate: '%s | oneacre.online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'V7vbhUc7Ac1zBbL-C2C7N07OR0FbJITlzmBBigadURY',
      },
      {
        hid: 'fb:page_id',
        name: 'fb:page_id',
        content: '1143704795732201',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: siteMeta.title,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: siteMeta.image,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: siteMeta.title,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@onacre.online',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: siteMeta.image,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: siteMeta.description,
      },
      {
        hid: 'description',
        name: 'description',
        content: siteMeta.description,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon_black.ico' }],
    script: [
      {
        type: 'text/javascript',
        src: '/scripts/jquery-3.2.1.min.js',
      },
    ],
  },
  generate: {
    fallback: true, // if you want to use '404.html' instead of the default '200.html'
    // fallback: 'my-fallback/file.html' // if your hosting needs a custom location
  },
  // router
  router: {
    middleware: ['authLink'],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/directives.js'],
  /*
   ** Nuxt.js dev-modules
   */
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/sitemap-module
    // Note: always declare the sitemap module at end of array
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://oneacre.online',
  },
  // Doc: https://hackernoon.com/how-i-use-scss-variables-mixins-functions-globally-in-nuxt-js-projects-while-compiling-css-utilit-58bb6ff30438
  styleResources: {
    scss: ['assets/scss/main.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxyHeaders: false,
    credentials: false,
    baseURL: `${url}/api/v2`,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT],
          markdown: (body) => {
            return markdownCustomCompiler(body)
          },
        },
      })
    },
  },
}
