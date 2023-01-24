/* Example 2 */
import getAllProductsQuery from "../utils/queries/get-all-products";
import fetchApi from "../utils/fetch-api";

// type FetchParams = {
//   query: string;
// };

// const fetchApi = async ({ query }: FetchParams) => {
//   /* Example 1 */
//   // const url = "https://jsonplaceholder.typicode.com/todos";

//   /* Example 2 */
//   const url = "http://localhost:4000/graphql";

//   const res = await fetch(url, {
//     /* Example 1 */
//     // method: "GET",
//     // headers: {
//     //   "Content-Type": "application/json",
//     // },

//     /* Example 2 */
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       /* Example 1 */
//       // query: getAllProductsQuery,
//       /* Example 2 */
//       query,
//     }),
//   });

//   const data = await res.json();
//   // Example 1 Recomendeed
//   return { data };
//   // Example 2
//   //   return data;
// };

const getAllProducts = async (): Promise<any[]> => {
  /* Example 1 */
  // const products = await fetchApi();
  /* Example 2 */
  const products = await fetchApi({ query: getAllProductsQuery });
  // Example 1 Recomendeed
  return products.data;
  // Example 2
  //   return products;
};

export default getAllProducts;
