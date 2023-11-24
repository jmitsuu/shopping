<script setup>
import {ref, onMounted} from 'vue';
import Products from '../../components/Products.vue';
import layout from "../../components/layout.vue";
import {eletronicProducts} from "../../helpers/getApi";
import Scope from '../../components/Scope.vue';
import {textEletronics} from "../../helpers/message"


</script>
<template>

 


<layout>
  <template #scope>
      <Scope :title="'Eletronicos'" :text="textEletronics" />
    </template>
    <template #prod>
      <div class="" v-for="item in eletronicProducts" :key="item.id">
        <Products :title="item.title" :items="item" :img="item.image" :price="item.price" />
      
      </div>


    </template>
  </layout>
</template>../../helpers/getApi../../helpers/message