<template>
  <section id="services" class="bg-secondary dark:bg-dark2">
    <div class="container">
      <div data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-center dark:text-light">Lorem ipsum <span class="text-primary ">dolor sit amet</span></h2>
        <p class="text-center text-gray-700 my-1 dark:text-gray-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda at impedit sed?</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="400" class="my-2 grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-6 md:mx-4 mx-2">
        <ServiceCard v-for="item in serviceCardInfo"
                     :ket="item.id"
                     :icon="item.icon"
                     :content="item.content"
        />
      </div>
    </div>
  </section>
  <svg class="relative bottom-2 dark:bg-dark bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path class="dark:fill-dark2 fill-secondary"  fill-opacity="1" d="M0,128L1440,64L1440,0L0,0Z"></path></svg>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";
import useService from "../composables/useService.js";

export default {
  name: "Services",
  components:{ServiceCard},
  setup(){
    const {serviceCardInfo}=useService()
    return {serviceCardInfo}
  }
}
</script>

<style scoped>

</style>