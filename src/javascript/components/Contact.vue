<template>
  <section id="contact" class=" relative top-[-33px]">
    <div class="container">
      <div class="grid lg:grid-cols-[1.5fr_3fr] grid-cols-1  lg:mx-12 md:mx-7 mx-2">
        <div data-aos="fade-up" data-aos-delay="400" >
          <h2 class="dark:text-light">Lorem ipsum dolor <span class="text-primary">sit amet.</span></h2>
          <p class="dark:text-light my-1.4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea facilis magnam nam sequi, suscipit tempore!</p>
          <div>
            <label for="email" class="py-0.75 inline-block dark:text-light text-1.1 w-full">Email:</label>
            <input type="email" class="input" id="email" placeholder="Email...">
          </div>
          <div>
            <label for="message" class="py-0.75 inline-block dark:text-light text-1.1 w-full">Message:</label>
            <textarea  class="input" id="message" placeholder="Message..."></textarea>
          </div>
          <button class="btn btn-primary mt-1">Send Message</button>

        </div>
        <div data-aos="fade-up" data-aos-delay="600" >
          <img src="../../assets/contact.svg" alt="">
        </div>
      </div>
    </div>
  </section>
  <svg class=" dark:bg-dark2 bg-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path class="dark:fill-dark fill-white"  fill-opacity="1" d="M0,128L1440,64L1440,0L0,0Z"></path></svg>
</template>

<script>
export default {
  name: "Contact"
}
</script>
