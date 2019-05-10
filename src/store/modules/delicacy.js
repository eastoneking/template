import api from '../../apis/delicacy';
import validate from '../../validations/delicacy';
import cookie from '../../cookies/delicacy';


const state = {
    all: []
};

const getters = {
    /**
     * Get a delicacy by id.
     *
     * @param state
     * @return {function(*): {id: string, name: string, price: number, description: string}}
     */
    getById: (state) => (id) => {
        return state.all.find(item => item.id === id)
    },

    /**
     * Get a list of delicacies where price greater than 100.
     *
     * @param state
     * @return {{id: string, name: string, price: number, description: string}[]}
     */
    highPrice: (state) => state.all.filter(item => item.price > 100)
};

const mutations = {
    /**
     * Await set a page of delicacies to `state.all`.
     *
     * @param state
     * @param {{id: string, name: string, price: number, description: string}[]} delicacies
     */
    set(state, delicacies) {
        state.all = delicacies;
        cookie.set(delicacies)
    },

    /**
     * Await append a page of delicacies to `state.all`.
     *
     * @param state
     * @param {{id: string, name: string, price: number, description: string}[]} delicacies
     */
    append(state, delicacies) {
        state.all = state.all.concat(delicacies);
        cookie.set(state.all)
    },

    /**
     * Await update a delicacy by id.
     *
     * @param state
     * @param {{id: string, name: string, price: number, description: string}} delicacy
     */
    update(state, delicacy) {
        state.all = state.all.map(item => (item.id === delicacy.id) ? delicacy : item)
    },

    /**
     * Await delete a delicacy by id.
     *
     * @param state
     * @param {string} id
     */
    delete(state, id) {
        state.all = state.all.filter(item => item.id !== id)
    }
};

const actions = {
    testSet({ commit }) {
        api.getAllTestData(delicacies => {
            commit("set", delicacies)
        })
    },

    testAppend({ commit }) {
        api.getMoreTestData(delicacies => {
            commit("append", delicacies)
        })
    },

    testUpdate({ commit }, data) {
        setTimeout(() => commit("update", data), 1000)
    },

    testDelete({ commit }, id) {
        setTimeout(() => commit("delete", id), 1000)
    },

    /**
     * Sync set a page of delicacies to `state.all`.
     *
     * @param commit
     */
    set({ commit }) {
        api.getByPage(1, delicacies => {
            commit("set", delicacies)
        })
    },

    /**
     * Sync append a page of delicacies to `state.all`.
     *
     * @param commit
     * @param {number} page
     * @return {*|string|boolean}
     */
    append({ commit }, page) {
        let validation = validate.page(page);
        if (validation) return validation;

        api.getByPage(page, delicacies => {
            commit("append", delicacies)
        })
    },

    /**
     * Sync update a delicacy by id.
     *
     * @param commit
     * @param {{id: string, name: string, price: number, description: string}} data
     * @return {*|string|boolean}
     */
    update({ commit }, data) {
        let validation = validate.data(data);
        if (validation) return validation;

        api.update(data, delicacy => {
            commit("update", delicacy)
        })
    },

    /**
     * Sync delete a delicacy by id.
     *
     * @param commit
     * @param {string} id
     * @return {*|string|boolean}
     */
    delete({ commit }, id) {
        let validation = validate.id(id);
        if (validation) return validation;

        api.delete(id, () => {
            commit("delete", id)
        })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
