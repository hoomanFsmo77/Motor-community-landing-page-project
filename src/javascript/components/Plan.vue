<template>
  <section id="plan" class="bg-white dark:bg-dark relative top-[-33px] py-1">
    <div class="container">
      <div>
        <h2 class="text-center dark:text-light">Lorem ipsum <span class="text-primary ">dolor sit amet</span></h2>
        <p class="text-center text-gray-700 my-1 dark:text-gray-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda at impedit sed?</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-8 mx-1 gap-1">
        <PlanCard v-for="(item,index) in plansInfo" :key="index" :title="item.title" :price="item.price" :period="item.period" :full-color="item.fullColor" :content-title="item.contentTitle" :content1="item.content1" :content2="item.content2" :content3="item.content3"/>

      </div>
    </div>
  </section>

</template>

<script>
import PlanCard from "./PlanCard.vue";
export default {
  name: "Plans",
  components:{PlanCard},
  setup(){
    let plansInfo=[
      {title:'Commercial',price:'250.99$',period:'Monthly',fullColor:false,contentTitle:'Lorem ipsum',
        content1:'Lorem ipsum lorem',content2:'Lorem ipsum lorem',content3:'Lorem ipsum lorem'
      },
      {title:'Economic',price:'430.99$',period:'Monthly',fullColor:true,contentTitle:'Lorem ipsum',
        content1:'Lorem ipsum lorem',content2:'Lorem ipsum lorem',content3:'Lorem ipsum lorem'
      },
      {title:'Startup',price:'500.99$',period:'Monthly',fullColor:false,contentTitle:'Lorem ipsum',
        content1:'Lorem ipsum lorem',content2:'Lorem ipsum lorem',content3:'Lorem ipsum lorem'
      },
    ]
    return{plansInfo}
  }
}
</script>