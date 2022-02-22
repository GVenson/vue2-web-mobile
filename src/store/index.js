import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const state = {
    userName: '',
    userCode: '',
    title: ''
}
const actions = {

}
const mutations = {
    TITLE(state, value) {
        console.log('TITLE', state, value)
        state.title = value
    }
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})