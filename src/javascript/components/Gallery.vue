<template>
  <section id="gallery" class="bg-white dark:bg-dark p-2 relative top-[-33px]">
    <div class="container">
      <div data-aos="fade-left" data-aos-delay="250">
        <h2 class="text-center dark:text-light">Lorem ipsum <span class="text-primary ">dolor sit amet</span></h2>
        <p class="text-center text-gray-700 my-1 dark:text-gray-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda at impedit sed?</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="500" class="my-2">
        <nav>
          <ul class="flex flex-row gap-1 justify-center">
            <li @click="changeNav(1,0,3)" :class="tabNum===1 && 'gallery-nav-active'" class="text-dark2 dark:text-light p-0.5 cursor-pointer ">Nature</li>
            <li @click="changeNav(2,4,7)" :class="tabNum===2 && 'gallery-nav-active'" class="text-dark2 dark:text-light p-0.5 cursor-pointer">Technology</li>
            <li @click="changeNav(3,8,11)" :class="tabNum===3 && 'gallery-nav-active'" class="text-dark2 dark:text-light p-0.5 cursor-pointer">Travel</li>
            <li @click="changeNav(4,0,11)" :class="tabNum===4 && 'gallery-nav-active'" class="text-dark2 dark:text-light p-0.5 cursor-pointer">All</li>
          </ul>
        </nav>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:mx-12 mx-2 my-3">
          <img v-for="item in pictureToShow" :key="item.id" :src="item.img" alt="" class="rounded-6">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useGallery from "../composables/useGallery.js";
import '../../assets/nature/nature_1.jpg'
import '../../assets/nature/nature_4.jpg'
import '../../assets/nature/nature_3.jpg'
import '../../assets/nature/nature_2.jpg'
import '../../assets/travel/travel_1.jpg'
import '../../assets/travel/travel_2.jpg'
import '../../assets/travel/travel_3.jpg'
import '../../assets/travel/travel_4.jpg'
import '../../assets/technology/tech_1.jpg'
import '../../assets/technology/tech_2.jpg'
import '../../assets/technology/tech_3.jpg'
import '../../assets/technology/tech_4.jpg'

export default {
  name: "Gallery",
  setup(){
    let {changeNav,pictureToShow,tabNum}=useGallery()
    return {tabNum,changeNav,pictureToShow}
  }
}
</script>

<style>

</style>