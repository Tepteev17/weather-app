<template>
	<div class="py-2 sm:py-8 " v-if="locationDataDailyList">
		<div class="mx-auto pt-10  max-w-7xl px-6 lg:px-8 ">
			<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl ">
				<!-- {{ locationDataDailyList.city.name }} -->
			</h2>
			<div class=" mb-10 p-5 bg-gray-900 rounded-2xl mx-auto max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
				v-for="(dayItem, key) in restructLocationData" :key="key">
				<p class="text-6xl font-bold tracking-tight text-white sm:text-4xl">{{ formatedDate(dayItem[0].dt_txt)}}</p>
				<div class="gap-x-8 ">
					<nuxt-link to="#" v-for="weatherHoursItem in dayItem" :key="weatherHoursItem.dt_txt"
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
		</div>
	</div>
</template>

<script>
//import weatherDailyItem from "@/pages/weather-location/_location/daily/index.vue"
import global from '@/mixins/global'
// import { restructLocationData } from '@/mixins/utils'

export default {
	mixins: [global],
	layout: 'layout-info-weather',
	// components: {
	// 	weatherDailyItem
	// },
	// remove after dev 
	async fetch({ store, params }) {
		await store.dispatch('location-info/fetchLocationDataDaily', params)
		await store.dispatch('location-info/fetchData', params)
		const locationData = store.getters['location-info/locationData']

		store.commit("location-info/setCurrentLocation", { name: locationData.name, coord: locationData.coord })
	},
	computed: {
		locationDataDailyList() {
			return this.$store.getters['location-info/locationDataDaily']
		},
		restructLocationData() {
			const data = this.$store.getters['location-info/locationDataDaily'].list
			const newData = (data) => {
				const newDailyData = {}
				for (let i = 0; i < data.length; i++) {
					let date = (data[i].dt_txt).slice(0, 10)
					if (newDailyData[date] === undefined) {
						newDailyData[date] = []
					}
					newDailyData[date].push(data[i])
				}
				return newDailyData
			}
			return newData(data)
		}
	},

}
</script>