<template>
	<div class="relative isolate  sm:py-24 lg:py-32 min-h-screen flex" >
		<div class="mx-auto max-w-7xl px-6 lg:px-8 grid  content-center">
			<div class="mx-auto  max-w-2xl flex justify-center text-center aling-center">
				<div class="max-w-xl lg:max-w-lg">
					<h2 class="text-3xl font-bold tracking-tight text-indigo-700 sm:text-4xl ">
						Enter your location.
					</h2>
					<p class="mt-4 text-lg leading-8 text-white">
						Get complete weather information at your location.
					</p>
					<div class="mt-6 flex  gap-x-4">
						<label for="email-address" class="sr-only">Email address</label>
						<input id="email-address" name="email" type="email" autocomplete="email" required=""
							v-model="location"
							class="min-w-0 flex-auto rounded-md border-0  px-3 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							placeholder="Enter your location" />
						<button type="submit"
							@click.prevent="getDataWeather(location)"
							class="flex-none rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 p">
							Show
						</button>
					</div>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script setup>
import { ref } from 'vue'

let location = ref()

// function getDataWeather(location){
// 	if(location != ''){

// 	}
// 	router.push('/weather-location/' + location)
// }
</script>
<script>
export default {
	methods:{
		getDataWeather(location){
			this.$router.push('/weather-location/' + location)
		}
	}
}
</script>
