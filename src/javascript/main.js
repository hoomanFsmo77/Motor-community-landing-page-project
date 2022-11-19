//////////// Tailwind.config
import '../style/Tailwind.config/Tailwind.base.scss'
import '../style/Tailwind.config/Tailwind.component.scss'
import '../style/Tailwind.config/Tailwind.utilities.scss'

/////////// icon
import 'remixicon/fonts/remixicon.css';
////////// Vue
import {createApp} from "vue";
import App from "./App.vue";
createApp(App).mount('#app')