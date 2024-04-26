export const state = () => ({
	token: 'your_token',
	lang:'ru'
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
		commit('clearToken')
	}
}

export const getters = {
	hasToken: s => s.token !== null,
	lang: s => s.lang
} 
