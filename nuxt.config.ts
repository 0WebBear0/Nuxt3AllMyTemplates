/* eslint-disable */
// https://nuxt.com/docs/api/configuration/nuxt-config

import en from "./locales/en.json"
import ru from "./locales/ru.json"

export default defineNuxtConfig({
    ssr: true,
    imports: {
      autoImport: true
    },
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        detectBrowserLanguage: {
            alwaysRedirect: true,
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        locales: ['en', 'ru'],
        vueI18n: {
            globalInjection: true,
            legacy: false,
            fallbackLocale: 'ru',
            messages: {
                en: en,
                ru: ru,
            }
        }
    },
    typescript: {
        strict: true
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/style/variables.scss"; @import "@/assets/style/mixins.scss";',
                },
            },
        },
    },
    css: [
      `~/assets/style/main.scss`
    ],
})
