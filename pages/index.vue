<template>
    <div class="w-full flex items-center h-screen overflow-hidden bg-[#1b1b1b] bg-cover bg-center header relative">
        <div class="absolute top-0 left-0 bg-[#1b1b1b] bg-opacity-90 z-10 h-full w-full"></div>
        <div class="relative z-10 container">
            <h1 class="text-[180px] text-white leading-[180px] mb-6 opacity-95">LEARN.<br>BUILD.<br>Survive.</h1>
            <ul class="flex items-center">
                <li><NuxtLink class="py-3 text-white font-bold link px-5 mr-3 bg-main-light" to="/">5X</NuxtLink></li>
                <li><NuxtLink class="py-3 text-white font-bold link px-5 mr-3 bg-main-light" to="/">Vanilla</NuxtLink></li>
            </ul>
            <h1 class="text-white opacity-10 rotate-90 text-[150px] right-0 absolute z-30 top-1/3">Rustukrpc</h1>
        </div>
    </div>

    <div class="py-[150px] px-4 bg-[#202020]">
        <div class="container flex rounded-lg relative">
            <img src="~/assets/images/large_box.png" class="absolute -rotate-6 -left-10 -top-12" alt="Large Box">
            <div class="p-12 shadow-md bg-[#1b1b1b] max-w-lg 775px:max-w-full">
                <h1 class="text-6xl mb-3 text-gray-100">Innovative, <br> professional <br> and well led</h1>
                <p class="leading-8 text-gray-100 text-[15px]">RustUKRPC serves as a beacon of excitement and adventure for players, offering a vast and dynamic gaming world that is unmatched in its realism and intensity. <br> With its stunning landscapes, unpredictable wilderness, and ruthless player-versus-player battles, RustUKRPC delivers a truly unforgettable gaming experience that will keep players coming back for more</p>
            </div>
            <div class="w-full bg-cover bg-center side-img 775px:hidden"></div>
        </div>
    </div>
</template>