<template>
    <div class="space-y-2 py-6">
        <nuxt-link
            v-for="item in navigation" 
            :key="item.name"
            :to="item.to"
            class="-mx-3 block rounded-lg px-3 py-2 text-white font-semibold leading-7  hover:bg-gray-50" >
            {{ item.name }}
        </nuxt-link>
    </div>
</template>
<script>
export default {
    name:'navtabs',
    props:['navigation']
}
</script>