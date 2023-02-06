<template>
    <div>
        <div class="bg-cover bg-center min-h-[450px] relative flex items-center justify-center" style="background-image: url('/_nuxt/assets/images/servers_bg.jpg');">
            <div class="bg-black bg-opacity-40 backdrop-blur-md absolute w-full h-full"></div>
            <h1 class="text-7xl relative z-20 text-white mt-3">Our Servers List</h1>
        </div>
        <div class="bg-light-dark py-[60px] px-4">
            <div class="max-w-2xl m-auto">
                <h2 class="text-4xl text-white mb-3">How to join the server?</h2>
                <p class="text-gray-100 mb-6">To join any server, simply click the connect button. If it doesn't work, <br> copy and paste <span class="text-main-light">connect 159.69.140.244:[port-number]</span> in F1 concole in-game.</p>
                <div class="grid grid-cols-2 gap-6 635px:grid-cols-1 635px:max-w-[380px] m-auto">
                    <div class="p-6 rounded-md bg-dark flex flex-col text-center text-white">
                        <img src="https://cdn.discordapp.com/attachments/1071817254448140291/1072257291581132840/5x_image.png" class="mb-2" alt="RustUKRPC 5x Image">
                        <p class="mb-3">connect 159.69.140.244:28015</p>
                        <NuxtLink class="w-full py-3 bg-main-light text-white font-semibold" to="steam://connect/159.69.140.244:28015">CONNECT</NuxtLink>
                    </div>
                    <div class="p-6 rounded-md bg-dark flex flex-col text-center text-white">
                        <img src="https://cdn.discordapp.com/attachments/1071817254448140291/1072257291845386380/vanilla_image.png" class="mb-2" alt="RustUKRPC Vanilla Image">
                        <p class="mb-3">connect 159.69.140.244:38015</p>
                        <NuxtLink class="w-full py-3 bg-main-light text-white font-semibold" to="steam://connect/159.69.140.244:38015">CONNECT</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>