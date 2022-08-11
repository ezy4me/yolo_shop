import {createStore} from 'vuex';
import  axios  from 'axios';

const store = createStore({
    state: {
        brands: [],
    },
    mutations: {
        SET_BRANDS_TO_STATE: (state, brands) => {
            state.brands = brands;
            
        }
    }, // синхронные
    actions: {
        GET_BRANDS_FROM_API({commit}) {
            // axios
            // .get('http://localhost:3000/brands')
            return axios('https://jsonplaceholder.typicode.com/users')
            .then((brands) => {
                commit('SET_BRANDS_TO_STATE', brands.data);
                return brands;
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
        }
    },
    
});
export default store;