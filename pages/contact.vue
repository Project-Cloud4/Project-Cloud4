<template>
    <div
        class="min-h-screen h-max w-screen bg-gradient-to-tr from-base-100 via-black to-black flex flex-col items-center overflow-x-hidden">
        <div class="text-6xl font-bold pt-24">
            Contact
        </div>
        <div class="flex-1 flex justify-center items-center w-full h-full">
            <div
                class="p-1 bg-gradient-to-tr rounded-lg h-5/6 sm:h-4/5 xl:h-3/4 w-3/4 sm:w-3/4 xl-1/2 from-primary via-accent to-secondary">
                <div class="p-2 bg-black h-full w-full rounded-lg flex flex-col">
                    <p class="text-3xl font-semibold">> ./neofetch</p>
                    <div class="w-full flex flex-col sm:flex-row">
                        <img class="hidden sm:block h-64" src="/logopc4.png" />
                        <div class="h-64 w-full flex flex-col justify-center">
                            <p class="flex flex-col sm:flex-row gap-0 sm:gap-2 w-max" v-for="contact in contactInfo">
                            <p class="text-base  sm:text-xl  font-semibold">> {{ contact.what }}</p>
                            <a class="text-base  sm:text-xl font-semibold rounded-lg hover:text-primary"
                                :href="contact.link" target="_blank">
                                {{ contact.title }}
                            </a>
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-row">
                        <p class="text-3xl">></p>
                        <p class="text-3xl font-bold animate-pulse ml-2">|</p>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            contactInfo: [
                {
                    what: "Instagram:",
                    title: "@project_cloud4",
                    link: "https://www.instagram.com/project_cloud4/",
                },
                {
                    what: "Email:",
                    title: "tudor.zgimbau@gmail.com",
                    link: "mailto: tudor.zgimbau@gmail.com",
                },
                {
                    what: "GitHub:",
                    title: "https://github.com/Project-Cloud4",
                    link: "https://github.com/Project-Cloud4",
                },
                {
                    what: "TikTok:",
                    title: "@project_cloud4",
                    link: "https://www.tiktok.com/@project_cloud4",
                },
            ]
        }
    }
}
</script>