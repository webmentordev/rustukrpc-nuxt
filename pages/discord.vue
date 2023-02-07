<template>
    <div class="bg-light-dark h-[98vh] w-full flex items-center flex-col justify-center">
        <h1 class="text-white text-4xl mb-3">Discord</h1>
        <NuxtLink to="https://discord.gg/RBuD43eMna" target="_blank" class="text-2xl py-2 px-4 text-white bg-discord">Join Discord</NuxtLink>
    </div>
</template>

<script setup>
    onMounted(async () => {
        await navigateTo('https://discord.gg/RBuD43eMna', {
            external: true
        })
    })
</script>