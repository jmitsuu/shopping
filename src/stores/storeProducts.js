import { ref, computed } from "vue";
import { defineStore } from "pinia";
import instance from "../http/getUrl";

export const useProduct = defineStore("useProduct", () => {
  const infoProduct = ref();
  const responseUrl = ref();
  const skeletonLoad = ref(false);
  //this function receive items from products.vue
  function incrementProduct(item) {
    infoProduct.value = item;
  }
  //this function receive route parameters
  const getApi = async (fetch) => {
    skeletonLoad.value = true;
    setTimeout(async () => {
      responseUrl.value = (await instance.get(`/products/${fetch}`)).data;
      skeletonLoad.value = false;
    }, 400);
  };

  return { infoProduct, incrementProduct, getApi, responseUrl, skeletonLoad };
});
