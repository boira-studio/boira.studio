import { I18N } from './config'

export default {
  target: 'static',

  router: {
    base: '/boira.studio/',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
        'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#fff' },
      /*
    ** Global CSS
    */
   css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/projectes.scss',
    '@/assets/scss/efectes.scss',
    '@/static/font/stylesheet.css',

    

],
  modules: [
    ['nuxt-i18n', I18N],
    ['@nuxt/content'],



  ],
  plugins: [
    { src: '~/plugins/version' }
  ],

  

}
