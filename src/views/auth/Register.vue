<script setup>
import {ref} from "vue";
import { EyeIcon} from '@heroicons/vue/24/solid'
const showpassord = ref(false);

</script>
<template>
    <main class="container m-auto flex xl:flex-col mb-4 p-4 gap-10    pt-20">

        <div class="p-2 w-full flex flex-col items-center justify-center gap-4 ">

   
        <form class="flex flex-col  p-4 h-full w-[600px] border-b-2 ">
            <h1 class=" font-bold uppercase text-gray-800 text-6xl text-right block ">
                <span class="border-b-4 border-red-400 w-15 h-2 font-extrabold text-gray-900">Registrar</span>
            </h1>
            <label class="text-gray-400 uppercase text-lg font-bold mt-8">Nome</label>
            <input type="text" class="border-b outline-none w-96  text-red-600 mt-4 pb-2" placeholder="Digite seu nome" />
            <label class="text-gray-400 uppercase text-lg font-bold mt-8">E-mail de acesso</label>
            <input type="email" class="border-b outline-none w-96  text-red-600 mt-4 pb-2" placeholder="Digite seu e-mail" />
            <label class="text-gray-400 uppercase text-lg font-bold mt-8">Senha de acesso</label>
            <div class="relative w-96">
                <input  :type="!showpassord? 'password' : ' text'" class="border-b outline-none w-96  text-red-600 mt-4 pb-2 " placeholder="Digite sua senha " />
                <EyeIcon @click="showpassord = !showpassord" class="h-4 cursor-pointer absolute right-3 bottom-3" />
            </div>
            <label class="text-gray-400 uppercase text-lg font-bold mt-8">Confirmar  Senha</label>
            <div class="relative w-96">
                <input  :type="!showpassord? 'password' : ' text'" class="border-b outline-none w-96  text-red-600 mt-4 pb-2 " placeholder="Confirme sua senha " />
                <EyeIcon @click="showpassord = !showpassord" class="h-4 cursor-pointer absolute right-3 bottom-3" />
            </div>
            
            
         
            <div class="  items-center">
                <button
                    class="px-3 py-2 text-white bg-red-500 font-bold w-28 rounded-md mt-8 uppercase hover:bg-red-600">Entrar</button>
                <p class=" font-bold mt-6"><span class="border-b-2 border-red-400 text-red-500 text-center cursor-pointer" >Esqueceu seu
                        login?</span></p>
            </div>

        </form>
        <span class="text-green-500 text-2xl">Registro realizado!</span>
        <RouterLink to="/auth/acesso">
          <button class="text-gray-600 text uppercase font-bold text-2xl mt-5  hover:text-gray-800">Voltar</button>
        </RouterLink>
  
       
    </div>
      



    </main>
</template>