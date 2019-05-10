// cookies/delicacy.js
import Cookie from "js-cookie";

import validate from "../validations/delicacy";

const CONFIG = {
    expires: 1,
    domain: "",
    path: ""
};

export default {
    get() {
        return Cookie.getJSON("delicacies", CONFIG);
    },

    set(delicacies) {
        let validations = delicacies.filter(delicacy => validate.data(delicacy));
        if (validations.length > 0) return "data didn't pass validation.";

        return Cookie.set("delicacies", delicacies, CONFIG);
    },

    remove() {
        return Cookie.remove("delicacies", CONFIG)
    },

    exist() {
        return !!this.get();
    }
}
