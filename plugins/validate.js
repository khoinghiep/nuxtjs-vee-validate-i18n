import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { alpha, alpha_dash, alpha_num, alpha_spaces, between, confirmed, digits, dimensions, email, excluded, ext, image, integer, is, is_not, length, max, max_value, mimes, min, min_value, numeric, oneOf, regex, required, required_if, size } from "vee-validate/dist/rules.js";

Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
const rules = [alpha, alpha_dash, alpha_num, alpha_spaces, between, confirmed, digits, dimensions, email, excluded, ext, image, integer, is, is_not, length, max, max_value, mimes, min, min_value, numeric, oneOf, regex, required, required_if, size];
const keys = { alpha, alpha_dash, alpha_num, alpha_spaces, between, confirmed, digits, dimensions, email, excluded, ext, image, integer, is, is_not, length, max, max_value, mimes, min, min_value, numeric, oneOf, regex, required, required_if, size };

for (let item in keys) {
    for (let fn of rules) {
        extend(item, fn)
    }
}

import { configure } from "vee-validate";

export default function ({ app }) {
    configure({
        defaultMessage: (field, values) => {
            values._field_ = app.i18n.t(`${field}`);
            return app.i18n.t(`validation.${values._rule_}`, values);
        }
    });
}