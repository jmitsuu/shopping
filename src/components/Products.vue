<script setup>
import { ref } from "vue";
import {useProduct} from '../stores/storeProducts'
const store = useProduct()
const props = defineProps(
  {
    title: String,
    price: Number,
    img: String,
    description: String,
    count: Number,
    rate: Number,
    items: String,
    item: String,
  })
</script>
<template>
  <RouterLink to="/descricao" @click="store.incrementProduct(props.items)">

    <div
      class="flex h-72 w-44 border-[0.1em]   hover:shadow-[#011526] shadow-inner  transition duration-300 p-4 rounded-md text-center flex-col">
      <img :src="props.img" class="rounded-lg mx-auto h-36 w-36 " />
      <div class="flex flex-col items-center">
        <p class="text-gray-600 text-xs xl:text-[1.0rem]">
          {{ props.description }}

        </p>
        <p class="text-gray-900 font-bold text-[1.3rem]">
          <span class="font-normal text-[1.0rem]" v-if="props.rate">Nota</span>
          {{ rate }}
        </p>
      </div>
      <p class="text-slate-500  font-semibold text-semibold text-center text-[1rem]">
        {{ props.title.substring(0, 20) }}...
      </p>
      <div class="flex  justify-center items-center">

        <p class="text-orange-500 text-[1.2rem] text-bold mt-3">
          <span class="border-t-2 border-orange-600">
            {{ props.price }} R$</span>
        </p>
      </div>
    </div>
  </RouterLink>
</template>
