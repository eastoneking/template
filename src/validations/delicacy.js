// validate/delicacy.js
export default {
    /**
     * Validate page validity.
     *
     * @param {number} page
     * @return {string|boolean}
     */
    page(page) {
        if (typeof page !== "number") {
            console.error("page must be number.");
            return "page must be number."
        }

        if (page.toString().indexOf(".") > -1 || page <= 0) {
            console.error("page must be positive integer.");
            return "page must be positive integer."
        }

        return false
    },

    /**
     * Validate id validity.
     *
     * @param {string} id
     * @return {string|boolean}
     */
    id(id) {
        if (typeof id !== "string") {
            console.error("id must be string.");
            return "id must be string."
        }

        return false
    },

    /**
     * Validate data validity
     * @param {{id: string, name: string, price: number, description: string}} data
     * @return {string|*|string|boolean|boolean}
     */
    data(data) {
        if (data.id) {
            let result = this.id(data.id);
            if (result) return result
        }

        if (typeof data.name !== "string") {
            console.error("name must be string.");
            return "name must be string."
        }

        if (typeof data.price !== "number") {
            console.error("price must be number.");
            return "price must be number."
        }

        let priceString = data.price.toString();
        if ((priceString.length - priceString.indexOf(".")) > 3) {
            console.error("price is at most 2 decimal places.");
            return "price is at most 2 decimal places."
        }

        if (typeof data.description !== "string" || data.description.length > 200) {
            console.error("description must be string and less than 200 words.");
            return "description must be string and less than 200 words."
        }

        return false
    }
}
