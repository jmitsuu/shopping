import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import instance from "../http/getUrl"

export const useProduct = defineStore('useProduct', () => {
  const infoProduct = ref();
  const responseUrl = ref()
  function incrementProduct( item) {
  infoProduct.value = item;
  console.log( infoProduct.value)
  }
  async function getApi(endpoint){
   responseUrl.value = await instance.get(`/products/${endpoint}`).data;
   console.log(endpoint)
  }

  return { infoProduct, incrementProduct, getApi, responseUrl }
})
