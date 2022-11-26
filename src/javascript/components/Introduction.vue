<template>
  <section id="intro" class="dark:bg-dark">
      <div class="container grid grid-cols-1 lg:grid-cols-2  items-center p-1">
        <div data-aos-delay="400" data-aos="fade-up">
          <h1 class="my-1 font-500 dark:text-light">Lorem ipsum dolor <span class="text-primary">sit amet</span></h1>
          <p class="text-justify font-500 leading-1.7 dark:text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores esse et illum libero minus nihil numquam velit vitae? Distinctio excepturi in ipsam laboriosam mollitia odit, officiis optio pariatur sit totam!
          </p>
          <div class="my-2">
            <button class="btn btn-primary mr-0.5">Lorem ipsum dolor</button>
            <button class="btn btn-secondary mr-0.5">Lorem ipsum</button>
          </div>

        </div>
        <div data-aos-delay="600" data-aos="fade-up" class="flex justify-center p-1">
          <img src="../../assets/motor.svg" width="450" alt="">
        </div>
      </div>
  </section>
  <svg class="bg-secondary dark:bg-dark2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path class="dark:fill-dark fill-white"  fill-opacity="1" d="M0,128L1440,64L1440,0L0,0Z"></path></svg>

</template>

<script>

export default {
  name: "Introduction"
}
</script>
