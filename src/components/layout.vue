<script setup>


</script>
<template>

  <div class="container mx-auto mt-2 bg-slate-50">
    <slot name="scope"></slot>
  </div>
  <div
    class="justify-center w-full flex bg-opacity-10 container mx-auto mt-10 mb-10 border min-h-screen rounded-md p-4 bg-white"
  >
    <div
      class="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-5"
    >
      <slot name="prod"></slot>
    </div>
  </div>
</template>
