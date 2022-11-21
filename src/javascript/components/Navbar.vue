<template>
  <nav class="shadow-xl dark:shadow-xl dark:bg-dark">
      <div class="container p-0.75 flex justify-between items-center relative">
        <a href="#" class="flex items-center [&_img]:mr-0.75">
          <img :src="setSrc()" width="65" alt="">
          <h6 class="dark:text-white">Motor Community</h6>
          <div class="ml-0.75 ">
            <button @click="changeMode" v-if="mode===2" class="btn btn-secondary p-0.875 px-1.1"><i class="fa-solid fa-moon text-1.4"></i></button>
            <button @click="changeMode" v-if="mode===1" class="btn btn-secondary p-0.875 px-1"><i class="fa-solid fa-sun  text-1.4"></i></button>
            <button @click="changeMode" v-if="mode===3" class="btn btn-secondary p-0.875 "><i class="fa-solid fa-tv text-1.2"></i></button>
          </div>
        </a>
        <Transition name="fade">
          <div v-if="open" class="navbar ">
            <ul class="navbar_content">
              <li class="navbar-item"><a href="#">Contact Us</a></li>
              <li class="navbar-item"><a href="#">About Us</a></li>
              <li class="relative"  >
                <a href="#" class="flex items-center navbar-item justify-center" @click="show=!show">
                  Products <i class="fas fa-chevron-down text-0.75 ml-0.25"></i>
                </a>
                <Transition name="fade">
                  <ul v-if="show" class="dropdown">
                    <li class="dropdown-item"><a href="#">Lorem ipsum.</a></li>
                    <li class="dropdown-item"><a href="#">Lorem ipsum.</a></li>
                    <li class="dropdown-item"><a href="#">Lorem ipsum dolor.</a></li>
                  </ul>
                </Transition>
              </li>
              <li class="navbar-item active"><a href="#">Main Page</a></li>
            </ul>
            <button class="btn btn-primary lg:mx-1 my-1 lg:my-0 lg:w-auto w-full">Membership</button>
            <button class="btn btn-secondary lg:w-auto w-full">Sign in</button>
            <i class="fas fa-times dark:text-white absolute top-0 right-0 lg:hidden text-2 m-1 cursor-pointer" @click="closeMenu"></i>
          </div>
        </Transition>
        <div class="lg:hidden cursor-pointer" @click="openMenu">
          <i class="fas fa-bars text-2 dark:text-white" ></i>
        </div>
      </div>
  </nav>
</template>

<script>
import '../../assets/logo.png';
import '../../assets/logo_dark.png';
import useMenu from "../composables/useMenu.js";
export default {
  name: "Navbar",
  mixins:[useMenu]

}
</script>
<style scoped>
.fade-enter-active,.fade-leave-active{
  transition: all 400ms;
}
.fade-enter-from,.fade-leave-to{
  opacity: 0;
}
.fade-enter-to,.fade-leave-from{
  opacity: 1;
}
</style>
