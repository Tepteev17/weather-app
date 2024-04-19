<template>
    <div class="mb-10 p-5 bg-gray-900 rounded-2xl">
        <p class="text-6xl font-bold tracking-tight text-white sm:text-4xl ">{{ formatedDate(dayItem[0].dt_txt) }}</p>
        <div class="gap-x-8">
            <nuxt-link to="#" v-for="weatherHoursItem in dayItem" :key="weatherHoursItem.dt"
                class="flex max-w-xl max-w-full items-center  p-4 ">
                <div class="flex items-center gap-x-2">
                    <time :datetime="weatherHoursItem.dt" class="text-white text-md">{{ formatedTime(weatherHoursItem.dt_txt) }}</time>
                </div>

                <div class="flex items-center gap-x-4 w-full  justify-around relative">
                    <div class="flex gap-x-4 items-center">
                        <h2 class="text-xl font-bold tracking-tight text-white sm:text-5xl text-white">
                            <div class=" text-4xl leading-8 text-indigo-500">
                                {{ KelvinToCelsius(weatherHoursItem.main.temp) }} ℃
                            </div>
                        </h2>
                        <h2 class="text-xl font-bold tracking-tight text-white sm:text-5xl text-white">
                            <div class="text-xl leading-8 text-gray-500">
                                {{ KelvinToCelsius(weatherHoursItem.main.temp_min) }} ℃
                            </div>
                        </h2>
                    </div>
                    <div class="text-md  text-white">{{ pressureFormatedToMercury(weatherHoursItem.main.pressure) }} мм
                    </div>
                    <div class="text-md  text-white">{{ weatherHoursItem.main.humidity }} %</div>
                    <div class="text-md text-white">{{ weatherHoursItem.wind.speed }} м/c
                    </div>
                </div>

            </nuxt-link>
        </div>
    </div>
</template>
<script>
import global from '@/mixins/global'
export default{
    mixins:[ global ],
    props:['dayItem']
}
</script>