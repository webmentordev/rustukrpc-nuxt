export default defineNuxtRouteMiddleware((to, from) => {
    return navigateTo('https://discord.gg/RBuD43eMna', { redirectCode: 301 })
  })