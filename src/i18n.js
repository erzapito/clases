import Vue from 'vue'
import VueI18n from 'vue-i18n'

import esContent from './locale/es.json'
import euContent from './locale/eu.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es: esContent,
    eu: euContent
  }
})

export default i18n
