import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        user:{},
    },
    // getters:{
    //     fetchedUser(state){
    //         return state.user;
    //     },
    // },
    mutations:{
        SET_USER(state, user){
            state.user = user
        }
    },
    actions
});