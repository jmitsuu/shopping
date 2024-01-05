<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { UserIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
import { ref } from "vue";
import { onClickOutside } from '@vueuse/core';
import Footer from './components/Footer.vue';
import Administrador from "./views/panel/Administrator.vue"
const modal = ref(false);
const target = ref(null)
onClickOutside(target, (event) => modal.value = false)
if(window.location.reload){
  modal.value = false
}
</script>

<template>
  <header class="w-full h-20 bg-[#038C73]  z-50">
    <div class="flex w-full h-full justify-center items-center">
      <nav class="flex relative w-full container h-full text-slate-100  justify-center items-center gap-5 ">
        <RouterLink class="" to="/">Home</RouterLink>
        <div class="relative">
          <h1 @click="modal = !modal" class="cursor-pointer flex items-center gap-1" @mouseover="modal = true">Produtos
            <ChevronUpIcon v-if="!modal" class="h-4" />
            <ChevronDownIcon v-if="modal" class="h-4" />
          </h1>
          <div ref="target" v-if="modal" @mouseleave="modal = false"
            class="absolute bottom-[-10] gap-3 text-slate-800 flex flex-col z-50 bg-gray-200 rounded-md py-2 px-4">
            <h1 class="text-gray-900 font-bold text-[1.2rem] border-b-[0.1rem] border-black text-center">Vestuario</h1>

            <RouterLink to="/vestuario/masculino" @click="modal = false">Masculino</RouterLink>
            <RouterLink to="/vestuario/feminino" @click="modal = false">Feminino</RouterLink>
            <h1 class="text-gray-900 font-bold text-[1.2rem] border-b-[0.1rem] border-black text-center">Acessórios</h1>

            <RouterLink to="/acessorios/joias" @click="modal = false">Jóias</RouterLink>

            <h1 class="text-gray-900 font-bold text-[1.2rem] border-b-[0.1rem] border-black text-center">Informática</h1>

            <RouterLink to="/informatica/eletronicos" @click="modal = false">Eletronicos</RouterLink>


          </div>
        </div>

        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/" class="right-28 absolute flex items-center">
          <UserIcon class="h-4 mr-3 text-sm" /> Entre ou Cadastre-se
        </RouterLink>
      </nav>

    </div>

  </header>
  
  <div class="min-h-screen ">
    <RouterView />
  </div>

  <Footer/>
</template>

<style scoped></style>
