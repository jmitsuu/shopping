<script setup>
import { useProduct } from "../stores/storeProducts";
import {
  StarIcon,
  Square3Stack3DIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/solid";
import axios from "axios";
const store = useProduct();
import { ref, computed } from "vue";
import  {useRoute} from "vue-router";

const route = useRoute()
const modal = ref(false);
const qtd = ref(1);
const inputCep = ref("88113500");
const dataLocal = ref();
const priceSplit = ref();
// async function getCep() {
//   const { data } = await axios.get(
//     `https://viacep.com.br/ws/${inputCep.value.trim().replace("-", "")}/json/`
//   );
//   dataLocal.value = data;
//   modal.value = false;
// }
// getCep();



const selectedProduct = computed(()=>{
  window.scrollTo(0, 0);
  return store.responseUrl.find((item) => item.id === Number(route.params.id))
})

</script>

<template>
  <section
    class="min-h-screen py-10 flex flex-col justify-center items-center bg-slate-50"
  >
    <div class="mx-auto container border-[0.1rem] rounded-md p-3 bg-white">
      <div
        class="xl:w-2/4 min-w-[800px] mx-auto justify-center items-center border-[0.1rem] flx xl:flex rounded-md mt-4 xl:pl-10 xl:pt-9 p-4"
      >
        <img :src="selectedProduct.image" class="h-56 mx-auto w-56" />
        <div class="xl:ml-10 w-full">
          <h1 class="text-gray-700 xl:text-[1.8rem] text-center font-semibold">
            {{ selectedProduct.title }}
          </h1>
          <div
            class="flex gap-4 relative text-gray-600 w-full border-[0.1rem] border-gray-300 p-3 rounded-md"
          >
            <h2 class="border-r-2 pr-1 cursor-pointer">
              <span
                class="font-bold flex justify-center items-center text-[1.1rem] mr-3"
                >{{ selectedProduct.rating.rate }}
                <span class="text-xs ml-1 text-center">/5</span>
                <div class="flex h-10 w-20 ml-4 items-center">
                  <StarIcon
                    class="h-6 w-6"
                    :class="
                      selectedProduct.rating.rate >= 1
                        ? ' text-yellow-600'
                        : '  text-yellow-600/10'
                    "
                  />
                  <StarIcon
                    class="h-6 w-6"
                    :class="
                      selectedProduct.rating.rate >= 2
                        ? ' text-yellow-600'
                        : '  text-yellow-600/10'
                    "
                  />
                  <StarIcon
                    class="h-6 w-6"
                    :class="
                      selectedProduct.rating.rate >= 3
                        ? ' text-yellow-600'
                        : '  text-yellow-600/10'
                    "
                  />
                  <StarIcon
                    class="h-6 w-6"
                    :class="
                      selectedProduct.rating.rate >= 4
                        ? ' text-yellow-600'
                        : '  text-yellow-600/10'
                    "
                  />
                  <StarIcon
                    class="h-6 w-6"
                    :class="
                      selectedProduct.rating.rate >= 4.7
                        ? ' text-yellow-600'
                        : '  text-yellow-600/10'
                    "
                  />
                </div>
              </span>
            </h2>

            <h2 class="font-bold right-2 top-[30%] absolute">
              {{ selectedProduct.rating.count }} vendidos
            </h2>
          </div>
          <h1 class="mt-4 text-[2.5rem] font-bold text-red-800">
            {{ selectedProduct.price }} R$
          </h1>
          <div>
            <h1 v-if="(priceSplit = selectedProduct.price / 8)">
              8x de
              <span class="text-red-700 font-semibold">{{
                priceSplit.toFixed(2)
              }}</span>
              sem juros no cartão
            </h1>
          </div>
          <div class="flex gap-8 text-sm mt-6 text-gray-700">
            <h1>Frete</h1>
            <div class="relative h-full">
              <p>Frete para:</p>
              <p
                @click="modal = !modal"
                class="bg-gray-50 flex p-3 cursor-pointer border-2"
              >
                <Square3Stack3DIcon class="h-5 mr-4" />
                <span>
                  <!-- {{ dataLocal.uf }}, {{ dataLocal.localidade }},
                  {{ dataLocal.logradouro }} -->
                </span>
              </p>
              <div
                v-if="modal"
                class="absolute xl:flex gap-3 bg-gray-300 rounded-sm p-5"
              >
                <input
                  placeholder="Digete um Cep"
                  class="w-32 py-4 pl-2 rounded-sm outline-none"
                  v-model="inputCep"
                  required
                />
                <button
                  class="p-3 rounded-md mt-2 md:mt-0 bg-red-200 text-gray-700 font-bold hover:bg-red-300"
                  @click="getCep"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
          <div class="flex mt-10 text-sm text-gray-700">
            <h1>Quantidade</h1>
            <input type="number" v-model="qtd" class="ml-10 w-10" />
          </div>
          <div class="mt-10 gap-3 flex">
            <button
              class="px-2 py-3 flex bg-red-100 text-red-800 transition-all hover:bg-red-300 rounded-md"
            >
              <ShoppingCartIcon class="h-5 mr-3" />
              Adicionar ao Carrinho
            </button>
            <button
              class="px-2 py-3 bg-red-300 text-gray-700 transition-all hover:bg-red-500 rounded-md"
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
      <div
        class="xl:w-2/4 min-w-[800px] mx-auto xl:min-h-[300px] mt-6 bg-white border-t-[0.1rem] xl:pl-10 xl:pt-9 p-4"
      
      >
        <h1 class="text-gray-600 text-[1.4rem] p-3 w-full bg-slate-100 h-full">
          Descrição do Produto
        </h1>
        <p class="text-[0.9rem] mt-10">{{ selectedProduct.description }}</p>
      </div>
      <div
        class="mx-auto min-w-[800px] xl:w-2/4 border-t-[0.1rem] p-3 bg-white"
      >
        <div class="mt-10">
          <h1 class="uppercase font-bold text-gray-800">
            <span class="border-b-2 pb-2">Avaliações</span>
          </h1>

          <div class="mt-10">
            <h1 class="text-[4.1rem] font-bold text-gray-700">
              {{ selectedProduct.rating.rate }}<span class="text-xl">/5</span>
            </h1>
            <div class="flex">
              <StarIcon
                class="h-6 w-6"
                :class="
                  selectedProduct.rating.rate >= 1
                    ? ' text-yellow-600'
                    : '  text-yellow-600/10'
                "
              />
              <StarIcon
                class="h-6 w-6"
                :class="
                  selectedProduct.rating.rate >= 2
                    ? ' text-yellow-600'
                    : '  text-yellow-600/10'
                "
              />
              <StarIcon
                class="h-6 w-6"
                :class="
                  selectedProduct.rating.rate >= 3
                    ? ' text-yellow-600'
                    : '  text-yellow-600/10'
                "
              />
              <StarIcon
                class="h-6 w-6"
                :class="
                  selectedProduct.rating.rate >= 4
                    ? ' text-yellow-600'
                    : '  text-yellow-600/10'
                "
              />
              <StarIcon
                class="h-6 w-6"
                :class="
                  selectedProduct.rating.rate >= 4.7
                    ? ' text-yellow-600'
                    : '  text-yellow-600/10'
                "
              />
            </div>
          </div>
          <div class="mt-10">
            <h1
              class="uppercase font-bold text-gray-800 border-b-2 pb-5 text-[1.3rem]"
            >
              Avaliações mais recentes
            </h1>
            <div class="flex flex-col mt-6 gap-10">
              <div class="flex gap-10 border-b-2 pb-4">
                <div class="w-28">
                  <h1 class="text-gray-400 text-xl font-bold">Jhon Doe</h1>
                  <p class="text-gray-300 font-semibold text-xs">00/00/0000</p>
                </div>
                <div>
                  <div class="flex">
                    <StarIcon class="h-6 w-6 text-yellow-600" />
                  </div>

                  <p class="mt-4">messagem</p>
                </div>
              </div>
              <div class="flex gap-10">
                <div class="w-28">
                  <h1 class="text-gray-400 text-xl font-bold">Jessica Doe</h1>
                  <p class="text-gray-300 font-semibold text-xs">00/00/0000</p>
                </div>
                <div>
                  <div class="flex">
                    <StarIcon class="h-6 w-6 text-yellow-600" />
                    <StarIcon class="h-6 w-6 text-yellow-600" />
                  </div>

                  <p class="mt-4">messagem</p>
                </div>
              </div>
              <button
                class="p-4 border-2 w-44 mx-auto text-gray-700 bg-gray-50 rounded-sm hover:bg-gray-400 hover:text-white uppercase"
              >
                Carregar Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
