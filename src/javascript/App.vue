<template>
  <Navbar/>
  <Introduction/>
  <Services/>
  <Plan/>
  <Gallery/>
  <Contact/>
  <Footer/>
</template>

<script>
/////////// main style
import '../style/App.scss';
import 'aos/dist/aos.css';
////////// components
import Navbar from "./components/Navbar.vue";
import Introduction from "./components/Introduction.vue";
import Services from "./components/Services.vue";
import Plan from "./components/Plan.vue";
import Gallery from "./components/Gallery.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import AOS from 'aos';
export default {
  name: "App",
  components:{
    Navbar,Introduction,Services,Plan,Gallery,Contact,Footer
  },
  beforeCreate() {
    AOS.init()
  }
}
</script>

