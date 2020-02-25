import { extend,configure } from 'vee-validate';
import Vue from 'vue'
import * as rules from 'vee-validate/dist/rules';
import { ValidationProvider,ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// with typescript
for (let [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  });
}

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

export default function ({ app }) {
    configure({
        defaultMessage: (field, values) => {
            values._field_ = app.i18n.t(`${field}`);
            return app.i18n.t(`validation.${values._rule_}`, values);
        }
    });
}