<template>
  <Navbar/>
  <Introduction/>
  <Services/>
</template>

<script>
/////////// main style
import '../style/App.scss';
////////// components
import Navbar from "./components/Navbar.vue";
import Introduction from "./components/Introduction.vue";
import Services from "./components/Services.vue";


export default {
  name: "App",
  components:{
    Navbar,Introduction,Services
  }
}
</script>

