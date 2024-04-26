<template>
	<client-only >
		<div class="relative container mx-auto isolate overflow-hidden py-24 sm:py-32">
			<div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
				aria-hidden="true">
				<div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%);" />
			</div>
			<div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
				aria-hidden="true">
				<div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%);" />
			</div>
			<div class="mx-auto px-6 lg:px-8">
				<div class="mx-auto lg:mx-0">
					<div class="flex justify-between">
						<h2 class=" flex items-center text-4xl font-bold tracking-tight text-white sm:text-6xl ">
							<div class="">{{ locationData.name }}</div>
							<iconWeather :icon="locationData.weather[0]['icon']"/>
						</h2>
						<h2 class="text-xl font-bold tracking-tight text-white sm:text-5xl text-white">
							<p class="mt-6 text-4xl leading-8 text-gray-300">
								{{ KelvinToCelsius(locationData.main.temp) }} ℃
							</p>
						</h2>
					</div>
					<div class="flex items-center gap-x-5 mt-6 text-lg leading-8 text-gray-300 bg-gray-900 p-6 rounded-2xl">
						<iconWeather :icon="locationData.weather[0]['icon']"/>
						<div>{{ locationData.weather[0]['description'] || ' ' }}</div>
					</div>
					<div class="mx-auto mt-6  lg:mx-0 lg:max-w-none">
						<dl class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 content-end">
							<div v-for="stat in stats" :key="stat.name"
								class="flex flex-col-reverse  bg-gray-900 p-6 rounded-2xl">
								<dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
								<dd class="text-2xl font-bold leading-9 tracking-tight text-indigo-500">
									{{ stat.value }}
								</dd>
							</div>
						</dl>
					</div>
					<p class="mt-6 text-lg leading-8 text-gray-300 bg-gray-900 p-6 rounded-2xl">
						Coordintes: <br />
						Lat:<span class="text-indigo-500 text-2xl">
							{{ locationData.coord.lat }} °</span>
						<br />
						Lon:<span class="text-indigo-500 text-2xl">
							{{ locationData.coord.lon }} °</span>
					</p>
				</div>
				
			</div>
		</div>
	</client-only>
</template>

<script>
import global from '@/mixins/global'
import iconWeather from '@/components/ui/icon-weather.vue'
export default {
	data(){
		return{
			weatherData:null
		}
	},
	mixins: [global],
	middleware:['auth'],
	components:{iconWeather},
	layout: 'layout-info-weather',
	async fetch({ store, params }) {
		await store.dispatch('location-info/fetchData', params)
		const locationData = await store.getters['location-info/locationData']
		store.commit("location-info/setCurrentLocation", { name: locationData.name, coord: locationData.coord })
	},
	computed: {
		locationData() {
			return this.$store.getters['location-info/locationData']
		},
		stats() {
			const locationData = this.$store.getters['location-info/locationData']
			if (locationData && locationData.main && locationData.wind) {
				return [
					{ name: 'Humidity', value: locationData.main.humidity + ' %' },
					{ name: 'Pressure', value: locationData.main.pressure },
					{ name: 'Wind Speed', value: locationData.wind.speed + ' metr/sec' },
					{ name: 'Min temp', value: (locationData.main.temp_min - 273.15).toFixed(2) },
				]
			} else {
				return []
			}
		}
	}
}
</script>
