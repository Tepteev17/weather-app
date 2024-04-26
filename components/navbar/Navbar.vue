<template>
    <client-only>
        <header class="absolute inset-x-0 top-0 z-50 ">
                <nav class="flex items-center justify-between p-4 lg:px-8 " aria-label="Global">
                    <div class="flex lg:flex-1">
                        <HomeLink/>
                    </div>
                    <div class="flex lg:hidden">
                        <button 
                            type="button"
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
                            class=" text-sm font-semibold leading-6">{{ item.name }}
                        </nuxt-link>
                    </div>

                    <login v-if="!isHasToken"/>
                    <logout class="hidden" v-else/>

                </nav>
                <div class="lg:hidden" @click="mobileMenuOpen = false" v-if="mobileMenuOpen">
                    <div class="fixed inset-y-0 w-full text-white bg-gray-900 right-0 z-50 w-full overflow-y-auto  px-6 py-6  sm:ring-1 sm:ring-gray-900/10" >
                        <div class="flex items-center justify-end">
                            <button 
                                type="button" 
                                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                                @click="!mobileMenuOpen">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6 c flow-root">
                            <div class="-my-6 divide-y divide-gray-500/10">
                            <Navtabs :navigation="navigation"/>
                            <login v-if="!isHasToken"/>
                            <logout v-else/>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    </client-only>
</template>

<script>
import logout from './navComponents/logout.vue'
import login from './navComponents/login.vue'
import HomeLink from './navComponents/homeLink.vue'
import Navtabs from './navComponents/navtabs.vue'
export default {
    data(){
        return {
            mobileMenuOpen: false,
            navigation: [
                { name: "About", to: "/about" },
                { name: "Features", to: "/features" },
                { name: "Company", to: "/company" },
            ]
        }
    },
    components:{
        logout,login, HomeLink, Navtabs
    },
    computed:{
        isHasToken(){
            return this.$store.getters.hasToken
        }
    }
}
</script>