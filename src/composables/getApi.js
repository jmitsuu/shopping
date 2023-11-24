import instance from "../http/getUrl"
import {ref} from 'vue';
export const results = ref();
export const masculine = ref();
export const feminine =  ref();
export const data = async (category)=>{
  const  res= await instance.get(`/products?limit=20`);
    results.value =  res.data
    console.log(res.data)
      return res


}
export const getMasculine = async ()=>{

    const  res = await  instance.get(`/products/category/men's clothing`);
    masculine.value =  res.data
      return res
}

export const getFeminine = async ()=>{
  const  res = await  instance.get(`/products/category/women's clothing`);
  feminine.value =  res.data
    return res
}