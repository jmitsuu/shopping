import axios from "axios"
const instance = axios.create({
  baseURL:'https://fakestoreapi.com'
})
// export  const http = async (fetch)=>{
//   const response = await axios.get(`https://fakestoreapi.com${fetch}`)
// return response;
// }
export default instance;