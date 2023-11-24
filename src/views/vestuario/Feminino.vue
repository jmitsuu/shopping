<script setup>
import {ref, onMounted} from 'vue';
import Products from '../../components/Products.vue';
import layout from "../../components/layout.vue";
import {feminine , getFeminine} from "../../composables/getApi"
import Scope from '../../components/Scope.vue';
import {textFeminine} from "../../composables/message"
onMounted(async()=>{
  getFeminine();

})
</script>
<template>

<layout>
  <template #scope>
      <Scope :title="'Feminino'" :text="textFeminine" :img="`bg-[url('../assets/images/feminine/bg.jpg')]`"/>
    </template>

    <template #prod>
      
      <div class="" v-for="item in feminine" :key="item.id">
        <Products :title="item.title" :items="item" :img="item.image" :price="item.price" />
      
      </div>


    </template>
  </layout>
</template>