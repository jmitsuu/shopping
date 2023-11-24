<script setup>
import Products from '../components/Products.vue';
import {results, data } from "../composables/getApi";
import { ref, onMounted } from "vue";
import layout from "../components/layout.vue";
import bg1 from "../assets/images/b1.jpg";
import bg2 from "../assets/images/b2.jpg";
import bg3 from "../assets/images/b3.jpg";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';
import { TruckIcon, CreditCardIcon, ShoppingBagIcon, CheckBadgeIcon } from '@heroicons/vue/24/solid'

const slides = [bg1, bg2, bg3]

onMounted(async () => {
data()

})
</script>

<template>
  <div class="w-full h-10 bg-black flex justify-center items-center ">
    <h1 class="text-2xl text-gray-200 font-semibold">Aproveite nosso desconto de 10% na sua primeira compra</h1>
  </div>
  <carousel :items-to-show="1" :transition="900" :autoplay="3000" :wrapAround="true">
    <slide v-for="slide in slides" :key="slide">
      <img class="object-cover h-[600px] w-full" :src="slide" />
    </slide>
  </carousel>


  <div class="container  mx-auto p-3 text-white justify-center gap-36 items-center flex rounded-md w-full bg-black m-4">
    <div class="flex justify-center items-center ">
      <TruckIcon class="h-10 ml-2" />
      <div>
        <h1 class="font-bold">Frete Fixo*</h1>
        <p>Em todo Brasil</p>
      </div>

    </div>
    <div class="flex">
      <CreditCardIcon class="h-10 ml-2" />
      <div>
        <h1 class="font-bold">Pagamento</h1>
        <p>de fatura</p>
      </div>

    </div>
    <div class="flex">
      <ShoppingBagIcon class="h-10 ml-2" />
      <div>
        <h1 class="font-bold">Parcele em até 5x</h1>
        <p>sem juros*</p>
      </div>

    </div>
    <div class="flex">
      <CheckBadgeIcon class="h-10 ml-2" />
      <div>
        <h1 class="font-bold">Desconto</h1>
        <p>de 10% na primeira compra</p>
      </div>

    </div>

  </div>
  <layout>
    <template #prod>
      <div class="" v-for="item in results" :key="item.id">
        <Products :title="item.title" :items="item" :img="item.image" :price="item.price" />
      </div>


    </template>
  </layout>
</template>