// import path from 'path'
// import fs from 'fs'

export default {
    ssr: "false",
    target: "static",
    srcDir: "src",
    build: {
        extractCSS: true,
    },
    components: true,
    modules: ['@nuxtjs/firebase'],

    // server: {
    //     https: {
    //         key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //         cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    //     }
    // },
    firebase: {
        config: {
            projectId: 'perceptivity-portal',
            apiKey: 'AIzaSyDnPZtjSAJTXjTgdFnRaJyxJRvx5lYmXvE',
            authDomain: 'perceptivity-portal.firebaseapp.com'
        },
        services: {
            functions: true,
            auth: {
                initialize: {
                    onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
                }
            }
        }
    },

    head: {
        title: 'Perceptivity - Portal',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Perceptivity Portal' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: 'favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/", crossorigin: "anonymous" }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        'assets/css/nucleo/css/nucleo.css',
        'assets/sass/argon.scss',
        'assets/css/site.css'
    ],
    plugins: [
        { src: '~/plugins/dashboard/globalDirectives', ssr: false }
    ],
}