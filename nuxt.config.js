import Mode from 'frontmatter-markdown-loader/mode'
import { markdownCustomCompiler } from './helpers/markdownCustomCompiler'

export default {
  ssr: false,
  target: 'static',
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'home',
    titleTemplate: '%s | stef\'s and victoria\'s place on the internets ',
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/GSDevTools3.min.js'
      }
    ]
  },
  generate: {
    fallback: true, // if you want to use '404.html' instead of the default '200.html'
    // fallback: 'my-fallback/file.html' // if your hosting needs a custom location
  },
  // router
  router: {
    middleware: [],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'hotpink',
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/directives.js',
    { src: '~/plugins/vuex-persist', ssr: false },
  ],
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
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    'nuxt-i18n',
  ],

  i18n: {
    locales: ['en', 'nl', 'el'],
    defaultLocale: 'en',
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },

   toast: {
       position: 'bottom-left',
   },

  auth: {
    redirect: {
      login: '/private/login',
      logout: '/private/login',
      callback: '/private/login',
      home: '/private',
    },
    strategies: {
      google: {
        client_id: process.env.CLIENT_ID,
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
      },
    },
    plugins: ['~/plugins/auth.js'],
  },

  sitemap: {
    hostname: 'https://www.stefsandvictoriasplaceontheinternet.nl',
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
    credentials: true,
    headers: {
      'Authorization': `oa_Bearer ${process.env.BEARER_TOKEN}`
    }
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
