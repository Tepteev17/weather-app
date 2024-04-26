<template>
    <div class="lg:flex lg:flex-1 lg:justify-end" @click="logout">
        <nuxt-link to="/login?massage=logout" class="text-sm font-semibold leading-6 "> Logout <span
                aria-hidden="true">&rarr;</span></nuxt-link>
    </div>
</template>
<script>
export default{
    methods:{
        logout(){
            this.$store.dispatch('logout')
        }
    }
}
</script>