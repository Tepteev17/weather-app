<template>
	<div class="py-2 sm:py-8">
	  <div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
		  <nuxt-link to="#" v-for="deilyItem in dailyWeather" :key="deilyItem.id" class="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-4 rounded-2xl">
			<div class="flex items-center gap-x-4 text-xs">
			  <time :datetime="deilyItem.datetime" class="text-gray-500">{{ deilyItem.date }}</time>
			  <a :href="deilyItem.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ deilyItem.category.title }}</a>
			</div>
			<div class="group relative">
			  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
				<a :href="deilyItem.href">
				  <span class="absolute inset-0" />
				  {{ deilyItem.title }}
				</a>
			  </h3>
			  <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ deilyItem.description }}</p>
			</div>
			<div class="relative mt-8 flex items-center gap-x-4">
			  <img :src="deilyItem.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
			  <div class="text-sm leading-6">
				<p class="font-semibold text-gray-900">
				  <a :href="deilyItem.author.href">
					<span class="absolute inset-0" />
					{{ deilyItem.author.name }}
				  </a>
				</p>
				<p class="text-gray-600">{{ deilyItem.author.role }}</p>
			  </div>
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
	  title: 'monthly',
	  href: '#',
	  description:
		'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
	  date: 'Mar 16, 2020',
	  datetime: '2020-03-16',
	  category: { title: 'Marketing', href: '#' },
	  author: {
		name: 'monthly',
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
}
</script>