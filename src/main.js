import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

import { aliases, fa } from 'vuetify/iconsets/fa'

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";


const vuetify = createVuetify({
    icons: {
        defaultSet: "fa",
        aliases,
        sets: {
            fa
        },
    },
    components,

})

createApp(App).use(vuetify).mount('#app')
