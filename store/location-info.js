export const state = () => ({
	API_KEY: 'a40afe95c1556c0680e029102a42f02d',
	locationData: {},
	locationDataDaily: {},
	currentLocation: null,
    times: {
        'ru':{
            '03:00':'Ночью',
            '09:00':'Утром',
            '15:00':'Днем',
            '21:00':'Вечером'
        },
        'en':{ 
            '03:00':'At night', 
            '09:00':'In the morning', 
            '15:00':'In the afternoon', 
            '21:00':'In the evening' 
        }
    }
})

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
    async getCoordinates({state}, location) {
        const API = state.API_KEY
        const coordinates = await this.$axios.$get('/api' + `/geo/1.0/direct?q=${location}&limit=1&appid=${API}`)
        const coordinatesLat = coordinates[0].lat.toFixed(2)
        const coordinatesLon = coordinates[0].lon.toFixed(2)
        return { coordinatesLat, coordinatesLon }
    },
    async fetchData({state, dispatch, commit,rootGetters}, params) {
        const lang = rootGetters.lang
        try{
            const API = state.API_KEY,
            { coordinatesLat, coordinatesLon } = await dispatch("getCoordinates", params.location),
            path = `/data/2.5/weather?lang=${lang}&lat=${coordinatesLat}&lon=${coordinatesLon}&lang=${lang}&appid=${API}`,
            locationData = await this.$axios.$get('/api' + path)
            commit('setLocationData', locationData)
        }catch(e){
            console.log(e)
        }
    },
    async fetchLocationDataDaily({state, dispatch, commit,rootGetters}, params) {
        const lang = rootGetters.lang
        try{
            const API = state.API_KEY,
            { coordinatesLat, coordinatesLon } = await dispatch("getCoordinates", params.location),
            path = `/data/2.5/forecast?lat=${coordinatesLat}&lon=${coordinatesLon}&lang=${lang}&appid=${API}`,
            locationDataDaily = await this.$axios.$get('/api' + path)
            console.log(locationDataDaily)
            commit('setLocationDataDaily', locationDataDaily)
        }catch(e){
            console.log(e)
        }
    }
}

export const getters = {
    locationData: s => s.locationData,
	locationDataDaily: s => s.locationDataDaily,
	currentLocation: s => s.currentLocation,
    times: s => s.times
}
