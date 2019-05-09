// apis/delicacy.js
import axios from "axios";

import validate from "../validations/delicacy"


/**
 * Local config
 */
const http = axios.create({
    baseURL: "http://localhost:5000/delicacy",
    headers: {
        "Content-Type": "application/json"
    }
});

/**
 * Handle the http data.
 * @param {{id: string, name: string, price: number, description: string}} data
 * @return {*}
 */
const dataHandler = data => {
    // some handler for data.
    return data
};

export default {
    /**
     * Get a page of delicacies.
     * 
     * @param {number} page
     * @param {function} callback
     */
    getByPage(page, callback) {
        let validation = validate.page(page);
        if (validation) return validation;

        http.request({
            method: "GET",
            params: {
                page: page
            }
        }).then(response => {
            let result = response.data.map(item => dataHandler(item));

            callback(result)
        })
    },

    /**
     * Get a delicacy by id.
     * 
     * @param {string} id 
     * @param {function} callback
     */
    getById(id, callback) {
        let validation = validate.id(id);
        if (validation) return validation;

        http.request({
            url: "/" + id,
            method: "GET"
        }).then(response => {
            let result = dataHandler(response.data);

            callback(result)
        })
    },

    /**
     * Create a delicacy.
     * 
     * @param {{name: string, price: number, description: string}} data
     * @param {function} callback
     */
    create(data, callback) {
        let validation = validate.data(data);
        if (validation) return validation;

        http.request({
            method: "POST",
            data: data
        }).then(response => {
            let result = dataHandler(response.data);

            callback(result)
        })
    },

    /**
     * Update a delicacy by id.
     * 
     * @param {{id: string, name: string, price: number, description: string}} data
     * @param {function} callback
     */
    update(data, callback) {
        let validation = validate.data(data);
        if (validation) return validation;

        http.request({
            url: "/" + data.id,
            method: "PUT",
            data: data
        }).then(response => {
            let result = dataHandler(response.data);

            callback(result)
        })
    },

    /**
     * Delete a delicacy by id.
     * 
     * @param {string} id
     * @param {function} callback
     */
    delete(id, callback) {
        let validation = validate.id(id);
        if (validation) return validation;

        http.request({
            url: "/" + id,
            method: "DELETE"
        }).then(() => {
            // if have to validate something, add code in here.
            callback()
        })
    }
};
