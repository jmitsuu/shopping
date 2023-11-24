<script setup>
import {ref, onMounted} from 'vue';
import Products from '../../components/Products.vue';
import layout from "../../components/layout.vue";
import {masculine , getMasculine} from "../../composables/getApi";
import Scope from '../../components/Scope.vue';
import {textMasculine} from "../../composables/message"

onMounted(async()=>{
  getMasculine();

})
</script>
<template>

 


<layout>
  <template #scope>
      <Scope :title="'Masculino'" :text="textMasculine" :img="`bg-[url('../assets/images/masculine/bg.jpg')]`"/>
    </template>
    <template #prod>
      <div class="" v-for="item in masculine" :key="item.id">
        <Products :title="item.title" :items="item" :img="item.image" :price="item.price" />
      
      </div>


    </template>
  </layout>
</template>