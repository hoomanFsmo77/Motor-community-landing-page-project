<template>
  <div class="service_card flex gap-1 ">
      <div>
        <i :class="icon" class="text-primary text-2.5 p-1 rounded-full border-[1px] border-primary"></i>
      </div>
    <p class="leading-1.7 text-1.1 dark:text-light">{{content}}</p>
  </div>

</template>

<script>
export default {
  props:['icon','content'],
  name: "ServiceCard"
}
</script>
