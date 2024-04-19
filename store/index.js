export const state = () => ({
	token: null
})

export const mutations = {
	setToken(state, token){
		state.token = token
	},
	clearToken(state){
		state.token = null
	}
}

export const actions = {
	login({commit}){
		commit('setToken', 'your_token')
	},
	logout({commit}){
		console.log('logout')
		commit('clearToken')
	}
}

export const getters = {
	hasToken: s => s.token !== null
} 
