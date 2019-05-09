// apis/delicacy.js
import axios from "axios";

import validate from "../validations/delicacy";

const FIRST_TEST_DATA = [{
    id: "99a1f9d9-ae75-4371-984a-720a5e106238",
    name: "Food1",
    price: 10.24,
    description: "It's a delicious food."
}, {
    id: "725f8f5a-1d39-437b-bfd9-11df7e195e43",
    name: "Food2",
    price: 20.48,
    description: "It's a delicious food."
}, {
    id: "e8811afb-b57e-4f84-8f3f-079e8c2c9ac4",
    name: "Food3",
    price: 10.12,
    description: "It's a delicious food."
}, {
    id: "0371d638-5dd7-4ea6-96cf-6768c19efe19",
    name: "Food4",
    price: 66,
    description: "It's a delicious food."
}, {
    id: "5e45455e-6b5f-4cb9-9d73-e076e1fe70b0",
    name: "Food5",
    price: 88,
    description: "It's a delicious food."
}]

const SECOND_TEST_DATA = [{
    id: "6e924d16-6ec5-4ce2-b1cb-9b65cb016c83",
    name: "Food6",
    price: 10.24,
    description: "It's a delicious food."
}, {
    id: "75ba1284-88d5-449c-9aa3-02a27a622cfc",
    name: "Food7",
    price: 20.48,
    description: "It's a delicious food."
}, {
    id: "a81d796c-873b-48e9-a3bf-65d5786547e4",
    name: "Food8",
    price: 10.12,
    description: "It's a delicious food."
}, {
    id: "32bc808f-1c07-4dff-98aa-dc878921525c",
    name: "Food9",
    price: 66,
    description: "It's a delicious food."
}, {
    id: "11bb35a5-9282-46e4-bc76-bfe68ea102b4",
    name: "Food10",
    price: 88,
    description: "It's a delicious food."
}]

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
    getAllTestData(callback) {
        setTimeout(() => callback(FIRST_TEST_DATA), 1000)
    },

    getMoreTestData(callback) {
        setTimeout(() => callback(SECOND_TEST_DATA), 1000)
    },

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
