<template>
	<div class="py-2 sm:py-8">
	  <div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
		  <nuxt-link to="#" v-for="dailyDataItem in locatonDataDailyList" :key="dailyDataItem.dt" class="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-4 rounded-2xl">
			<!-- <div class="flex items-center gap-x-4 text-xs">
			  <time :datetime="dailyDataItem.datetime" class="text-white text-xl">{{ dailyDataItem.date }}</time>
			  <a :href="dailyDataItem.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ dailyDataItem.category.title }}</a>
			</div> -->
			<div class="group relative">
			  	<h2 class="text-xl font-bold tracking-tight text-white sm:text-5xl text-white">
					<p class="mt-6 text-4xl leading-8 text-gray-300">
						<!-- {{KelvinToCelsius(dailyDataItem.main.temp) }} ℃ -->
					</p>
				</h2>
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

export default {

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
			return this.$store.getters['location-info/locationDataDaily'].list
		}
	}
}
</script>