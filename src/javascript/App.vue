<template>
  <Navbar/>
  <Introduction/>
  <Services/>
  <Plan/>
  <Gallery/>
</template>

<script>
/////////// main style
import '../style/App.scss';
////////// components
import Navbar from "./components/Navbar.vue";
import Introduction from "./components/Introduction.vue";
import Services from "./components/Services.vue";
import Plan from "./components/Plan.vue";
import Gallery from "./components/Gallery.vue";

export default {
  name: "App",
  components:{
    Navbar,Introduction,Services,Plan,Gallery
  }
}
</script>

