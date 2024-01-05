import { ref, computed } from "vue";
import { defineStore } from "pinia";
import instance from "../http/getUrl";
import axios from "axios";
export const useProduct = defineStore("useProduct", () => {
  const infoProduct = ref();
  const responseUrl = ref();
  const skeletonLoad = ref(false);

  //this function receive route parameters
  const getApi = async (fetch) => {
    skeletonLoad.value = true;
    try {
     
        responseUrl.value = (await instance.get(`/products/`)).data;
        skeletonLoad.value = false;
    
    } catch (error) {
alert(error.message)
    }
  };
async function postProduct(items) {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify(items);
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/products/", requestOptions)
  .then(()=>{
    getApi()
  })
    .catch(error => console.log('error', error));


}

async function deleteProduct(id){
  await instance.delete(`/products/${id}`)
  getApi()

}
  return { infoProduct, getApi, postProduct ,deleteProduct,  responseUrl, skeletonLoad };
});
