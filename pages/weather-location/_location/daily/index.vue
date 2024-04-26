<template>
	<div class="py-2 sm:py-8 " v-if="locationDataDailyList">
		<client-only>
		<div class="w-full mx-auto pt-10 px-2 lg:px-8 ">
			<h2 class="text-5xl md:text-6xl font-bold tracking-tight text-white ">
				{{ locationDataDailyList.city.name }}
			</h2>
			<weatherDailyItem
				v-for="(dayItem, key) in restructLocationData" 
				:key="key"
				:dayItem="dayItem"
			/>
		</div>
	</client-only>
	</div>
</template>

<script>
import weatherDailyItem from "@/components/weatherDaily/weatherDayItem.vue"
import global from '@/mixins/global'


export default {
	mixins: [global],
	layout: 'layout-info-weather',
	components: {
		weatherDailyItem
	},
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
			const countryTime =  this.$store.getters['location-info/times'][this.$store.getters.lang]
			const newData = (data) => {
				const newDailyData = {}
				for (let i = 0; i < data.length; i++) {
					let date = (data[i].dt_txt).slice(0, 10)
					let time = (data[i].dt_txt).slice(11, 16)
					if (newDailyData[date] === undefined) {
						newDailyData[date] = []
					}
					if(time in countryTime){
						newDailyData[date].push(data[i])
					}
				}
				return newDailyData
			}
			return newData(data)
		}
	},

}
</script>