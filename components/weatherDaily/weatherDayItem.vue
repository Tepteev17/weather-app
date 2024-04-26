<template>
    <div class=" mb-5 sm:mb-8 p-3 lg:p-5 bg-gray-900 rounded-2xl mx-auto max-w-none grid-cols-1 gap-x-8 gap-y-16 pt-5 md:pt-10 sm:pt-8 lg:mx-0  lg:grid-cols-3">
        <p class="text-2xl font-bold tracking-tight text-white lg:text-4xl p-x-4">{{ formatedDate(dayItem[0].dt_txt) }}</p>
        <div class="gap-x-8">
            <nuxt-link 
                to="#" 
                v-for="weatherHoursItem in dayItem" 
                :key="weatherHoursItem.dt"
                class="flex max-w-xl max-w-full items-center p-2 sm:p-4 gap-x-5">       
                <div class="flex-none w-16 lg:w-32 text-white whitespace-nowrap  text-md">{{ formatedTime24(weatherHoursItem.dt_txt, times) }}</div>
                <div class="flex items-center flex-1 sm:items-center w-full justify-around sm:justify-between relative gap-x-5">
                    <div class="flex w-16 sm:w-32 lg:w-64 gap-x-2 items-stretch">
                        <h2 class="text-xl lg:text-3xl sm:text-2xl leading-8 text-indigo-500 font-bold tracking-tight text-white  text-white">
                            {{ KelvinToCelsius(weatherHoursItem.main.temp) }} ℃
                        </h2>
                        <h2 class="font-bold tracking-tight text-white  hidden sm:block text-white">
                            <div class="text-sm lg:text-xl sm:text-lg leading-8 text-gray-600">
                                {{ KelvinToCelsius(weatherHoursItem.main.temp_min) }} ℃
                            </div>
                        </h2>
                    </div>
                    <div class=" flex-initial w-12 sm:text-lg text-white" v-if="weatherHoursItem">
                            <iconWeather  :icon="weatherHoursItem.weather[0]['icon']" />
                    </div>
                    <div class="hidden md:block flex-initial w-32 text-sm hidden md:block text-white">
                        {{ weatherHoursItem.weather[0]['description'] || ' ' }}
                    </div>
                    <div class=" flex-initial w-16 text-sm sm:text-lg hidden sm:block text-white">{{ pressureFormatedToMercury(weatherHoursItem.main.pressure) }} мм
                    </div>
                    <div class=" flex-initial w-12 text-sm sm:text-lg hidden sm:block  text-white">{{ weatherHoursItem.main.humidity }} %</div>
                    <div class=" fflex-initial w-24  text-sm sm:text-lg text-white">{{ weatherHoursItem.wind.speed }} м/c 
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import global from '@/mixins/global'
import iconWeather from '../ui/icon-weather.vue';
export default{
    name: 'weatherDailyItem',
    mixins:[ global ],
    props:['dayItem'],
    components:{iconWeather},
    computed:{
        times(){
            return this.$store.getters['location-info/times']
        }
    }
}
</script>