// cookies/delicacy.js
import Cookie from "js-cookie";

import validate from "../validations/delicacy";

const CONFIG = {
    expires: 1,
    path: ""
};

export default {
    getAll() {
        return Cookie.getJSON("delicacies")
    },

    getById(id) {
        return this.getAll().find(delicacy => delicacy.id === id)
    },

    set(delicacies) {
        let validations = delicacies.filter(delicacy => validate.data(delicacy));
        if (validations.length > 0) return "data didn't pass validation.";

        return Cookie.set("delicacies", delicacies, CONFIG)
    },

    remove() {
        return Cookie.remove("delicacies", CONFIG)
    },

    exist() {
        return !!this.getAll()
    }
}
