import Vue from 'vue';
import Vuex from 'vuex';
import delicacy from './modules/delicacy';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        delicacy,
    }
});
