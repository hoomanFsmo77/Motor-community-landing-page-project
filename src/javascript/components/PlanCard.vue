<template>
  <div :data-aos-delay="delay" data-aos="flip-left" :class="fullColor && ['!bg-primary','[&_h2]:text-light','[&_h3]:text-light','[&_h6]:text-light','[&_span]:text-light']" class="plan-card border-[1px] border-primary p-1.4 rounded-8 border-t-8 dark:bg-dark2 group" >
      <h2 class="text-dark dark:text-light text-center text-1.5">{{title}}</h2>
    <h3 class="text-dark dark:text-light text-center my-0.75 text-1.5">{{price}}</h3>
    <div class="flex justify-center">
      <span class="inline-block w-[50%] p-1  dark:border-b-2 border-b-2  dark:border-b-light border-b-dark2 text-center dark:text-light text-1.4">{{period}}</span>
    </div>
    <div class="px-2.5">
      <h3 class="text-dark dark:text-light text-center my-0.75 md:text-1.4 text-1.2">{{contentTitle}}</h3>
      <h6 class="text-dark dark:text-light text-center my-0.75 md:text-1.2 text-1">{{content1}}</h6>
      <h6 class="text-dark dark:text-light text-center my-0.75 md:text-1.2 text-1">{{content2}}</h6>
      <h6 class="text-dark dark:text-light text-center my-0.75 md:text-1.2 text-1">{{content3}}</h6>
    </div>
    <div class="flex justify-center my-2">
      <button :class="fullColor && '!btn-secondary'" class="btn btn-primary ">Buy Plan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanCard",
  props:['title','price','period','fullColor','contentTitle','content1','content2','content3','delay']
}
</script>

<style scoped>

</style>