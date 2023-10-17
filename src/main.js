/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/no-reserved-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row'
import InputText from 'primevue/inputtext'
import Carousel from 'primevue/carousel';

const app = createApp(App)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('InputText', InputText)
app.component('Carousel', Carousel )

app.use(router)

app.mount('#app')
