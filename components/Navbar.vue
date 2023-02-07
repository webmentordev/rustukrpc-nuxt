<template>
    <nav class="bg-[#1b1b1b] fixed top-0 w-full z-50">
        <div class="flex items-center justify-between py-3 px-4 container">
            <NuxtLink to="/" class="flex items-center w-fit">
            <img src="~/assets/images/UK_FLAG_WHITE.png" width="50" alt="RustUKRPC Logo" />
            <h1 class="text-3xl text-white ml-3">RUSTUKRPC</h1>
            </NuxtLink>
            <ul class="flex items-center text-gray-100 font-semibold 775px:hidden">
                <li><NuxtLink class="mx-6" to="/">Home</NuxtLink></li>
                <li><NuxtLink class="mx-6" to="/servers">Servers</NuxtLink></li>
                <li><NuxtLink class="mx-6" to="/rules">Rules</NuxtLink></li>
                <li><NuxtLink class="mx-6" to="/donation">Donation</NuxtLink></li>
                <li><NuxtLink class="text-white bg-discord py-2 px-4 rounded-sm ml-3 flex items-center" to="/discord"><img width="22" height="22" class="mr-2" src="https://api.iconify.design/mingcute:discord-fill.svg?color=%23ffffff" alt="Discord Loto"> Discord</NuxtLink></li>
            </ul>
            <ul @click="showBar = true" class="hidden 775px:block">
                <li class="h-[1px] mb-2 w-[60px] bg-white"></li>
                <li class="h-[1px] mb-2 w-[60px] bg-white"></li>
                <li class="h-[1px] w-[60px] bg-white"></li>
            </ul>
            <div v-if="showBar" class="bg-dark backdrop-blur-lg bg-opacity-40 h-full w-full fixed top-0 left-0 z-50 flex items-center justify-center" @click.self="showBar = false">
                <ul class="text-center text-white">
                    <li class="mb-3"><NuxtLink to="/" class="text-2xl">Home</NuxtLink></li>
                    <li class="mb-3"><NuxtLink to="/rules" class="text-2xl">Rules</NuxtLink></li>
                    <li class="mb-3"><NuxtLink to="/servers" class="text-2xl">Servers</NuxtLink></li>
                    <li class="mb-3"><NuxtLink to="/donation" class="text-2xl">Donation</NuxtLink></li>
                    <li><NuxtLink to="/discord" class="text-2xl inline-block text-white bg-discord py-2 px-4 rounded-sm">Discord</NuxtLink></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return {
                showBar: false
            }
        }
    }
</script>