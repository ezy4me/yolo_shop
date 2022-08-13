import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        brands: [],
        categories: [],
    },
    mutations: {
        SET_BRANDS_TO_STATE: (state, brands) => {
            state.brands = brands;
        },
        SET_CATEGORIES_TO_STATE: (state, categories) => {
            state.categories = categories;
        }
    }, // синхронные
    actions: {
        GET_BRANDS_FROM_API({ commit }) {
            axios('http://localhost:3000/brands')
                .then((brands) => {
                    commit('SET_BRANDS_TO_STATE', brands.data);
                    return brands;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_CATEGORIES_FROM_API({ commit }) {
            axios('http://localhost:3000/categories')
                .then((categories) => {
                    commit('SET_CATEGORIES_TO_STATE', categories.data);
                    return categories;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    }, // асинхронные
    getters: {
        BRANDS(state) {
            return state.brands;
        },
        CATEGORIES(state) {
            return state.categories;
        }
    },

});
export default store;