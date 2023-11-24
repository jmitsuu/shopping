import instance from "../http/getUrl"

  const getProductsByCategory = async(category) =>{
  return (await instance.get(`/products/${category}`)).data
}
export const results = await getProductsByCategory("?limit=20");
export const maleProducts = await getProductsByCategory("category/men's clothing");
export const womenProducts = await getProductsByCategory("category/women's clothing");
export const jeweleryProducts = await getProductsByCategory("category/jewelery");
export const eletronicProducts = await getProductsByCategory("category/electronics");

