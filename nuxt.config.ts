// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icons'
    ],
    app: {
        head: {
            title: "Rust United Kingdom Community",
            meta: [
                {
                    name: "description", content: "Join United Kingdom bases rust community."
                }
            ],
            link: [
                {
                    rel: 'icon', type: 'image/x-icon', href: "https://cdn.discordapp.com/attachments/1071817254448140291/1072246872128888832/rs_favicon.png"
                }
            ]
        }
    }
})
