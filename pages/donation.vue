<template>
    <div class="bg-light-dark h-[98vh] w-full flex items-center flex-col justify-center">
        <h1 class="text-white text-4xl mb-3">Donation</h1>
        <NuxtLink to="https://rustukrpc.tebex.io/category/2316159" target="_blank" class="text-2xl py-2 px-4 text-white bg-discord">Donate here</NuxtLink>
    </div>
</template>

<script setup>
    onMounted(async () => {
        await navigateTo('https://rustukrpc.tebex.io/category/2316159', {
            external: true
        })
    })
</script>