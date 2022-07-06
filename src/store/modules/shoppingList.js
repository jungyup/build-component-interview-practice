
const state = {
    shoppingList: [],
    searchResults: []
}

const getters = {
    shoppingList (state) {
        return state.shoppingList;
    },
    searchResults (state) {
        return state.searchResults;
    }
}

const mutations = {
    SET_SHOPPING_LIST (state, payload) {
        state.shoppingList = payload
    },
    SET_SEARCH_RESULTS (state, payload) {
        state.searchResults = payload  
    }
}

const actions = {
    // eslint-disable-next-line no-unused-vars
    async getShoppingList ({ commit }, keyword) {
        console.log({keyword})
        const endpointURL = process.env.VUE_APP_SHOPPINGLIST_ENDPOINT;
        
        await fetch(`${endpointURL}/${keyword}`)
            .then(response => response.json())
            .then(data => commit('SET_SEARCH_RESULTS', data))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}