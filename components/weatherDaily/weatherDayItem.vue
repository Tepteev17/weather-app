<template>
    <div class=" mb-10 p-3 lg:p-5 bg-gray-900 rounded-2xl mx-auto max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-5 md:pt-10 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <p class="text-2xl font-bold tracking-tight text-white lg:text-4xl p-x-4">{{ formatedDate(dayItem[0].dt_txt) }}</p>
        <div class="gap-x-8">
            <nuxt-link to="#" v-for="weatherHoursItem in dayItem" :key="weatherHoursItem.dt"
                class="flex max-w-xl max-w-full items-center p-2 sm:p-4 gap-x-2">
                <div class="flex items-center gap-x-2">
                    <time :datetime="weatherHoursItem.dt" class="text-white text-md">{{ formatedTime(weatherHoursItem.dt_txt) }}</time>
                </div>
                <div class="flex items-center sm:items-center gap-x-1 sm:gap-x-4 w-full justify-between relative">
                    <div class="flex gap-x-2 items-center">
                        <h2 class="text-sm sm:text-lg lg:text-4xl sm:text-3xl leading-8 text-indigo-500 font-bold tracking-tight text-white  text-white">
                            {{ KelvinToCelsius(weatherHoursItem.main.temp) }} ℃
                        </h2>
                        <h2 class="font-bold tracking-tight text-white  text-white">
                            <div class="text-sm lg:text-2xl sm:text-xl leading-8 text-gray-600">
                                ...{{ KelvinToCelsius(weatherHoursItem.main.temp_min) }} ℃
                            </div>
                        </h2>
                    </div>
                    <div class="text-sm sm:text-lg  text-white">{{ pressureFormatedToMercury(weatherHoursItem.main.pressure) }} мм
                    </div>
                    <div class="text-sm sm:text-lg  text-white">{{ weatherHoursItem.main.humidity }} %</div>
                    <div class="text-sm sm:text-lg text-white">{{ weatherHoursItem.wind.speed }} м/c
                    </div>
                </div>
            </nuxt-link>
        </div>

    </div>
</template>
<script>
import global from '@/mixins/global'
export default{
    name: 'weatherDailyItem',
    mixins:[ global ],
    props:['dayItem']
}
</script>