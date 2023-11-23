<script setup>
import Products from '../components/Products.vue';
import {data} from "../composables/getApi";
import {ref, onMounted} from "vue";
import layout from "../components/layout.vue"
const products = ref()
async function getProducts(){
 const response = await data('?limit=20')
 products.value = response.data
  console.log(products.value)
}

onMounted(async()=>{
  getProducts()

})
</script>

<template>
<layout>
<template  #prod>
    <div
    class=""
    v-for="item in products"
    :key="item.id"
    
    >
    <Products
 :title="item.title" :items="item"  :img="item.image" :price="item.price"
 />
    </div>
 

</template>
</layout>
</template>