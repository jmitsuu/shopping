<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="w-full h-20 bg-[#038C73]">
    <div class="flex h-full justify-center items-center">
      <nav class="flex  h-full text-slate-100 justify-center items-center gap-5">
        <RouterLink class="" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div class="py-2 ">
    <RouterView />
  </div>


</template>

<style scoped>

</style>
