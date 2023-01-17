/* eslint-disable */
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: true,
    imports: {
      autoImport: true
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
    // build: {
    //     transpile: ['vuetify'],
    // },
    vite: {
        // define: {
        //     'process.env.DEBUG': false,
        // },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/style/variables.scss"; @import "@/assets/style/mixins.scss";',
                },
            },
        },
    },
    css: [
        // 'vuetify/lib/styles/main.sass',
        // '@mdi/font/css/materialdesignicons.min.css',
        `~/assets/style/main.scss`
    ],
})
