<template>
    <div
        class=" overflow-x-hidden min-h-screen h-max w-screen bg-gradient-to-tr from-base-100 via-black to-black flex flex-col justify-center items-center pt-32 sm:pt-24">
        <p class="text-6xl font-bold">Projects</p>
        <div
            class="flex-1 w-screen grid h-full grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-3 grid-flow-row place-content-eevenly justify-items-center mt-10">
            <div v-for="project in projects"
                class="h-64 w-64 sm:h-64 sm:w-64 xl:h-96 xl:w-96 bg-base-300 rounded-lg relative z-0 border-primary border-opacity-40 border-2 flex justify-center items-center">
                <div class="absolute h-full w-full z-20 flex flex-col p-4">
                    <div class="text-4xl w-full flex items-start font-bold">{{ project.title }}</div>
                    <div class="flex-1 flex items-end justify-end h-full">
                        <NuxtLink :to="'/' + project.title.toLocaleLowerCase()">
                            <button class="btn btn-primary mr-2">More</button>
                        </NuxtLink>
                        <a v-if="project.state !== 'development'" :href="project.link">
                            <button class="btn btn-primary">{{
                                project.state
                            }}</button>
                        </a>
                        <div v-else>
                            <button class="btn">
                                In Development
                            </button>
                        </div>
                    </div>
                </div>
                <div class="absolute h-full w-full z-10 bg-gradient-to-tr from-black opacity-50 rounded-lg">
                </div>
                <img class="relative z-0 opacity-60 max-h-64 sm:max-h-64 xl:max-h-96 block" :src="project.image" />
            </div>
        </div>
    </div>
</template>
<script>
export default
    {
        data() {
            return {
                projects: [
                    {
                        title: "Website",
                        image: "/logopc4.png",
                        link: "https://www.projectcloud4.com/",
                        state: "public"
                    },
                    {
                        title: "ATRIS",
                        image: "/atris.jpeg",
                        state: "development",
                        link: "",
                    }
                ],
            }
        }
    }

</script>
