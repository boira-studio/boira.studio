import en from '../lang/en-US.js'
import es from '../lang/es-ES.js'
import ca from '../lang/ca-Ca.js'


export const I18N = {
  locales: [
    {
      code: 'ca',
      iso: 'ca-Ca',
      name: 'Ca'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'En'
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Es'
    }
  ],
  defaultLocale: 'ca',

  vueI18n: {
    fallbackLocale: 'ca',
    messages: { en, es, ca }
  }
}
