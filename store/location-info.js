export const state = () => {
    locationData: {}
	locationDataDaily: {}
	currentLocation: null

}

export const mutations = {
    setLocationData(state, locationData){
        state.locationData = locationData
    },
	setLocationDataDaily(state, locationDataDaily){
		state.locationDataDaily = locationDataDaily
	},
	setCurrentLocation(state, currentLocation){
		state.currentLocation = currentLocation
	}
}

export const actions = {
    async fetchData({commit}, params){
        const API = 'a40afe95c1556c0680e029102a42f02d'
		const coordinates = await this.$axios.$get(`http://api.openweathermap.org/geo/1.0/direct?q=${params.location}&limit=1&appid=${API}`)
        const coordinatesLat = coordinates[0].lat.toFixed(2)
		const coordinatesLon = coordinates[0].lon.toFixed(2)

		const path = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinatesLat}&lon=${coordinatesLon}&appid=${API}`
		// get data by coordinates
		const locationData = await this.$axios.$get(path)
        // const locationData = {
		// 	coord: { lon: 37.6175, lat: 55.7504 },
		// 	weather: [
		// 		{
		// 			id: 804,
		// 			main: 'Clouds',
		// 			description: 'overcast clouds',
		// 			icon: '04n'
		// 		}
		// 	],
		// 	base: 'stations',
		// 	main: {
		// 		temp: 286.13,
		// 		feels_like: 285.94,
		// 		temp_min: 285.49,
		// 		temp_max: 286.44,
		// 		pressure: 1021,
		// 		humidity: 94,
		// 		sea_level: 1021,
		// 		grnd_level: 1002
		// 	},
		// 	visibility: 10000,
		// 	wind: { speed: 1.17, deg: 342, gust: 1.15 },
		// 	clouds: { all: 88 },
		// 	dt: 1712507419,
		// 	sys: {
		// 		type: 2,
		// 		id: 2000314,
		// 		country: 'RU',
		// 		sunrise: 1712457843,
		// 		sunset: 1712506723
		// 	},
		// 	timezone: 10800,
		// 	id: 524901,
		// 	name: 'Moscow',
		// 	cod: 200
		// }
        commit('setLocationData', locationData)

    },
	async fetchLocationDataDaily({commit}, params){
		const API = 'a40afe95c1556c0680e029102a42f02d'
		const coordinates = await this.$axios.$get(`http://api.openweathermap.org/geo/1.0/direct?q=${params.location}&limit=1&appid=${API}`)
        const coordinatesLat = coordinates[0].lat.toFixed(2)
		const coordinatesLon = coordinates[0].lon.toFixed(2)

		const path = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinatesLat}&lon=${coordinatesLon}&appid=${API}`
		// get data by coordinates
		const locationDataDaily = await this.$axios.$get(path)
		// const locationDataDaily = {
		// 	"cod": "200",
		// 	"message": 0,
		// 	"cnt": 40,
		// 	"list": [
		// 	  {
		// 		"dt": 1661871600,
		// 		"main": {
		// 		  "temp": 296.76,
		// 		  "feels_like": 296.98,
		// 		  "temp_min": 296.76,
		// 		  "temp_max": 297.87,
		// 		  "pressure": 1015,
		// 		  "sea_level": 1015,
		// 		  "grnd_level": 933,
		// 		  "humidity": 69,
		// 		  "temp_kf": -1.11
		// 		},
		// 		"weather": [
		// 		  {
		// 			"id": 500,
		// 			"main": "Rain",
		// 			"description": "light rain",
		// 			"icon": "10d"
		// 		  }
		// 		],
		// 		"clouds": {
		// 		  "all": 100
		// 		},
		// 		"wind": {
		// 		  "speed": 0.62,
		// 		  "deg": 349,
		// 		  "gust": 1.18
		// 		},
		// 		"visibility": 10000,
		// 		"pop": 0.32,
		// 		"rain": {
		// 		  "3h": 0.26
		// 		},
		// 		"sys": {
		// 		  "pod": "d"
		// 		},
		// 		"dt_txt": "2022-08-30 15:00:00"
		// 	  },
		// 	  {
		// 		"dt": 1661882400,
		// 		"main": {
		// 		  "temp": 295.45,
		// 		  "feels_like": 295.59,
		// 		  "temp_min": 292.84,
		// 		  "temp_max": 295.45,
		// 		  "pressure": 1015,
		// 		  "sea_level": 1015,
		// 		  "grnd_level": 931,
		// 		  "humidity": 71,
		// 		  "temp_kf": 2.61
		// 		},
		// 		"weather": [
		// 		  {
		// 			"id": 500,
		// 			"main": "Rain",
		// 			"description": "light rain",
		// 			"icon": "10n"
		// 		  }
		// 		],
		// 		"clouds": {
		// 		  "all": 96
		// 		},
		// 		"wind": {
		// 		  "speed": 1.97,
		// 		  "deg": 157,
		// 		  "gust": 3.39
		// 		},
		// 		"visibility": 10000,
		// 		"pop": 0.33,
		// 		"rain": {
		// 		  "3h": 0.57
		// 		},
		// 		"sys": {
		// 		  "pod": "n"
		// 		},
		// 		"dt_txt": "2022-08-30 18:00:00"
		// 	  },
		// 	  {
		// 		"dt": 1661893200,
		// 		"main": {
		// 		  "temp": 292.46,
		// 		  "feels_like": 292.54,
		// 		  "temp_min": 290.31,
		// 		  "temp_max": 292.46,
		// 		  "pressure": 1015,
		// 		  "sea_level": 1015,
		// 		  "grnd_level": 931,
		// 		  "humidity": 80,
		// 		  "temp_kf": 2.15
		// 		},
		// 		"weather": [
		// 		  {
		// 			"id": 500,
		// 			"main": "Rain",
		// 			"description": "light rain",
		// 			"icon": "10n"
		// 		  }
		// 		],
		// 		"clouds": {
		// 		  "all": 68
		// 		},
		// 		"wind": {
		// 		  "speed": 2.66,
		// 		  "deg": 210,
		// 		  "gust": 3.58
		// 		},
		// 		"visibility": 10000,
		// 		"pop": 0.7,
		// 		"rain": {
		// 		  "3h": 0.49
		// 		},
		// 		"sys": {
		// 		  "pod": "n"
		// 		},
		// 		"dt_txt": "2022-08-30 21:00:00"
		// 	  },
		// 	  {
		// 		"dt": 1662292800,
		// 		"main": {
		// 		  "temp": 294.93,
		// 		  "feels_like": 294.83,
		// 		  "temp_min": 294.93,
		// 		  "temp_max": 294.93,
		// 		  "pressure": 1018,
		// 		  "sea_level": 1018,
		// 		  "grnd_level": 935,
		// 		  "humidity": 64,
		// 		  "temp_kf": 0
		// 		},
		// 		"weather": [
		// 		  {
		// 			"id": 804,
		// 			"main": "Clouds",
		// 			"description": "overcast clouds",
		// 			"icon": "04d"
		// 		  }
		// 		],
		// 		"clouds": {
		// 		  "all": 88
		// 		},
		// 		"wind": {
		// 		  "speed": 1.14,
		// 		  "deg": 17,
		// 		  "gust": 1.57
		// 		},
		// 		"visibility": 10000,
		// 		"pop": 0,
		// 		"sys": {
		// 		  "pod": "d"
		// 		},
		// 		"dt_txt": "2022-09-04 12:00:00"
		// 	  }
		// 	],
		// 	"city": {
		// 	  "id": 3163858,
		// 	  "name": "Zocca",
		// 	  "coord": {
		// 		"lat": 44.34,
		// 		"lon": 10.99
		// 	  },
		// 	  "country": "IT",
		// 	  "population": 4593,
		// 	  "timezone": 7200,
		// 	  "sunrise": 1661834187,
		// 	  "sunset": 1661882248
		// 	}
		//   }
		  commit('setLocationDataDaily', locationDataDaily)
	}
}

export const getters = {
    locationData: s => s.locationData,
	locationDataDaily: s => s.locationDataDaily,
	currentLocation: s => s.currentLocation
}