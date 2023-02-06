// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
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
                    rel: 'icon', type: 'image/x-icon', href: "/_nuxt/assets/images/rs_favicon.png"
                }
            ]
        }
    }
})
