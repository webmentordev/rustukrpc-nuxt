<template>
    <nav class="bg-[#1b1b1b] fixed top-0 w-full z-50">
        <div class="flex items-center justify-between py-3 px-4 container">
            <NuxtLink to="/" class="flex items-center w-fit">
            <img src="~/assets/images/UK_FLAG_WHITE.png" width="50" alt="RustUKRPC Logo" />
            <h1 class="text-3xl text-white ml-3">RUSTUKRPC</h1>
            </NuxtLink>
            <ul class="flex items-center link text-gray-100 font-semibold">
                <li><NuxtLink class="mx-6" to="/">Home</NuxtLink></li>
                <li><NuxtLink class="mx-6" to="/servers">Servers</NuxtLink></li>
                <li><NuxtLink class="text-white bg-discord py-2 px-4 rounded-sm ml-3" to="/">Discord</NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>

<style>
.router-link-active .router-link-exact-active{
    color: white;
}
</style>