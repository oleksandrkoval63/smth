import axios from "axios";

export default async function fetchProducts(){
   const url = `http://localhost:5000/products`;
   try {
      const response = await axios.get(url);
      return response.data
   } catch (error) {
      console.error(error, `something bad`)
   }
}