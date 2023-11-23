import instance from "../http/getUrl"
import {ref} from 'vue';
const res = ref()
export const data = async (category)=>{
  const  res= await instance.get(`/products/${category}`);

  return res
}

