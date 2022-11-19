<template>
  <nav class="shadow-xl">
      <div class="container p-0.75 flex justify-between items-center">
        <a href="#" class="flex items-center [&_*]:mr-0.75">
          <img src="../../assets/logo.png" width="65" alt="">
          <h6 class="">Motor Community</h6>
        </a>
        <div class="flex flex-row items-center">
          <ul class="flex items-center flex-row [&_li]:mx-1 [&_li]:p-[0.4] [&_a]:text-[0.9rem] [&_li]:transition-all">
            <li class="hover:border-b-primary hover:border-b-[2px]"><a href="#">Contact Us</a></li>
            <li class="hover:border-b-primary hover:border-b-[2px]"><a href="#">About Us</a></li>
            <li class="hover:border-b-primary hover:border-b-[2px] relative"  @click="show=!show">
              <a href="#" class="flex items-center">
                Products <i class="ri-arrow-down-s-line text-1.2"></i>
              </a>
              <Transition name="fade">
                <ul v-if="show" class="absolute w-13 p-0.5 [&_li]:my-0.625 bg-white border-[#ccc] border-[1px] rounded-6 top-[38px] left-[-30px]">
                  <li class="hover:text-primary transition-all"><a href="#">Lorem ipsum.</a></li>
                  <li class="hover:text-primary transition-all"><a href="#">Lorem ipsum.</a></li>
                  <li class="hover:text-primary transition-all"><a href="#">Lorem ipsum dolor.</a></li>
                </ul>
              </Transition>
            </li>
            <li class="border-b-primary border-b-[2px]"><a href="#">Main Page</a></li>
          </ul>
          <button class="btn btn-primary mx-1">Membership</button>
          <button class="btn btn-secondary ">Sign in</button>

        </div>
      </div>
  </nav>

</template>

<script>
import '../../assets/logo.png';
import '../../style/components/Navbar.scss';
export default {
  name: "Navbar",
  data(){
    return{
      show:false
    }
  }
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
