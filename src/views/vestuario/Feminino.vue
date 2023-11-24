<script setup>
import {ref, onMounted} from 'vue';
import Products from '../../components/Products.vue';
import layout from "../../components/layout.vue";
import {womenProducts} from "../../helpers/getApi"
import Scope from '../../components/Scope.vue';
import {textFeminine} from "../../helpers/message"

</script>
<template>

<layout>
  <template #scope>
      <Scope :title="'Feminino'" :text="textFeminine" :img="`bg-[url('../assets/images/feminine/bg.jpg')]`"/>
    </template>

    <template #prod>
      
      <div class="" v-for="item in womenProducts" :key="item.id">
        <Products :title="item.title" :items="item" :img="item.image" :price="item.price" />
      
      </div>


    </template>
  </layout>
</template>../../helpers/getApi../../helpers/message