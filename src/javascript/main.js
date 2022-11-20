//////////// Tailwind.config
import '../style/Tailwind.config/Tailwind.base.scss'
import '../style/Tailwind.config/Tailwind.component.scss'
import '../style/Tailwind.config/Tailwind.utilities.scss'

////////// Vue
import {createApp} from "vue";
import App from "./App.vue";
createApp(App).mount('#app')