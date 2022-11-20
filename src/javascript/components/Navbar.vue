<template>
  <nav class="shadow-xl dark:bg-gray-900">
      <div class="container p-0.75 flex justify-between items-center relative">
        <a href="#" class="flex items-center [&_img]:mr-0.75">
          <img :src="setSrc()" width="65" alt="">
          <h6 class="dark:text-white">Motor Community</h6>
          <div class="ml-0.75 ">
            <button @click="changeMode" v-if="mode===3" class="btn btn-secondary p-0.875 px-1.1"><i class="fa-solid fa-moon text-1.4"></i></button>
            <button @click="changeMode" v-if="mode===2" class="btn btn-secondary p-0.875 px-1"><i class="fa-solid fa-sun  text-1.4"></i></button>
            <button @click="changeMode" v-if="mode===1" class="btn btn-secondary p-0.875 "><i class="fa-solid fa-tv text-1.2"></i></button>
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
            <i class="ri-close-fill absolute top-0 right-0 lg:hidden text-2 m-1 cursor-pointer" @click="closeMenu"></i>
          </div>
        </Transition>
        <div class="lg:hidden cursor-pointer" @click="openMenu">
          <i class="ri-align-justify text-2" ></i>
        </div>
      </div>
  </nav>
</template>

<script>
import '../../assets/logo.png';
import '../../assets/logo_dark.png'
import '../../style/components/Navbar.scss';
export default {
  name: "Navbar",
  data(){
    return{
      show:false,
      open:false,
      mode:1
    }
  },
  mounted() {
    if(window.innerWidth>960){
      this.open=true
    }
    this.mode=localStorage.getItem('_motor_x') ? Number(localStorage.getItem('_motor_x')) : 1
    this.setTheme()
  },
  methods:{
    openMenu(){
      this.open=!this.open
    },
    closeMenu(){
      this.open=false
    },
    changeMode(){
      this.mode++
      if(this.mode > 3){
        this.mode=1
      }
      this.setTheme()
      localStorage.setItem('_motor_x',this.mode)
    },
    setTheme(){
      if(this.mode===1){
          if(matchMedia('(prefers-color-scheme: dark) ').matches){
            document.body.classList.add('dark')
          }else{
            document.body.classList.remove('dark')
          }
      }else if(this.mode===2){
        document.body.classList.remove('dark')
      }else{
        document.body.classList.add('dark')
      }
    },
    setSrc(){

      return document.body.classList.contains('dark') ? './assets/logo_dark.png' :'./assets/logo.png'
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
