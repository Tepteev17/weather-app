<template>
    <div class="">
        <img :src="`https://openweathermap.org/img/wn/${icon}.png`" alt="">
    </div>
</template>
<script>
export default {
    props:['icon']
}
</script>