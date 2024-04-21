<template>
    <header class="absolute inset-x-0 top-0 z-50 ">
            <nav class="flex items-center justify-between p-4 lg:px-8 " aria-label="Global">
                <div class="flex lg:flex-1">
                    <nuxt-link to="/" class="-m-1.5 p-1.5" @click="clearData">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" />
                    </nuxt-link>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12 text-gray-900 ">
                    <nuxt-link exact no-prefetch active-class="text-white" v-for="item in navigation" :key="item.name" :to="item.to" 
                        class=" text-sm font-semibold leading-6">{{ item.name }}</nuxt-link>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end" v-if="!isHasToken">
                    <nuxt-link to="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
                            aria-hidden="true">&rarr;</span></nuxt-link>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end" v-else>
                    <nuxt-link to="/login?massage=logout" class="text-sm font-semibold leading-6 text-gray-900" @click="logout">Logout <span
                            aria-hidden="true">&rarr;</span></nuxt-link>
                </div>
            </nav>
            <!-- <div as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50" />
                <div
                    class="fixed inset-y-0  bg-indigo-700/25 right-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" >
                    <div class="flex items-center justify-between">
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"
                            @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            				</svg>
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                    item.name }}</a>
                            </div>
                            <div class="py-6">
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                    in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
    </header>
</template>

<script setup>
import { ref } from "vue"
const mobileMenuOpen = ref(false)

</script>
<script>
export default {
    data(){
        return {
            navigation: [
                { name: "Today", to: "" },
                { name: "Daily", to: "/daily" },
                { name: "Monthly", to: "/monthly" },
            ]
        }
    },
    async created(){
        const currentLocation = await this.$store.getters['location-info/currentLocation']
        this.navigation.forEach(el => el.to = /weather-location/ + currentLocation.name + el.to);
    },
    methods:{
        clearData(){
            this.$store.dispatch('location-info/clearDataLocation')
        },
        logout({}){
            this.$store.dispatch('logout')
        }
    },
    computed:{
        isHasToken(){
            return this.$store.getters.hasToken
        }
    }
}
</script>