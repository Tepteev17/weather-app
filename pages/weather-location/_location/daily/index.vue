<template>
	<div class="py-2 sm:py-8" v-if="locatonDataDailyList">
	  <div class="mx-auto pt-10  max-w-7xl px-6 lg:px-8">
		<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl ">
			{{ locatonDataDailyList.city.name }}
		</h2>
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10  sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
		  <nuxt-link to="#" v-for="dailyDataItem in locatonDataDailyList.list" :key="dailyDataItem.dt" class="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-4 rounded-2xl">
			<div class="flex items-center gap-x-2 text-xs">
			  <time :datetime="dailyDataItem.dt" class="text-white text-xl">{{ formatedDate(dailyDataItem.dt_txt)}}</time>
			  <!-- <a :href="dailyDataItem.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ dailyDataItem.category.title }}</a> -->
			</div>
			<div class="group relative">
				<div class="flex gap-x-4">
					<h2 class="text-xl font-bold tracking-tight text-white sm:text-5xl text-white">
						<p class="mt-2 text-4xl leading-8 text-indigo-500">
							{{ KelvinToCelsius(dailyDataItem.main.temp) }} ℃
						</p>
					</h2>
					<h2 class="text-xl font-bold tracking-tight text-white sm:text-5xl text-white">
						<p class="mt-2 text-xl leading-8 text-gray-500">
							{{ KelvinToCelsius(dailyDataItem.main.temp_min) }} ℃
						</p>
					</h2>
				</div>
				<p class="mt-5 line-clamp-3 text-md leading-6 text-white">{{ pressureFormatedToMercury(dailyDataItem.main.pressure) }} мм</p>
				<p class="mt-2 line-clamp-3 text-md leading-6 text-white">{{ dailyDataItem.main.humidity }} %</p>
				<p class="mt-2 line-clamp-3 text-md leading-6 text-white">{{ dailyDataItem.wind.speed }} м/c</p>
			</div>
		  </nuxt-link>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  
  const dailyWeather = [
	{
	  id: 1,
	  title: 'Boost your conversion ratqe',
	  href: '#',
	  description:
		'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
	  date: 'Mar 16, 2020',
	  datetime: '2020-03-16',
	  category: { title: 'Marketing', href: '#' },
	  author: {
		name: 'Michael Foster',
		role: 'Co-Founder / CTO',
		href: '#',
		imageUrl:
		  'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	  },
	},
	// More posts...
  ]
  </script>
<script>
import global from '@/mixins/global'

export default {
	mixins:[ global ],
	layout:'layout-info-weather',
	// remove after dev 
	async fetch({ store, params }) {
		await store.dispatch('location-info/fetchLocationDataDaily', params)
		await store.dispatch('location-info/fetchData', params)
		const locationData = store.getters['location-info/locationData']
		store.commit("location-info/setCurrentLocation", {name: locationData.name, coord: locationData.coord})		
	},
	computed:{
		locatonDataDailyList(){
			return this.$store.getters['location-info/locationDataDaily']
		}
	},
	
}
</script>