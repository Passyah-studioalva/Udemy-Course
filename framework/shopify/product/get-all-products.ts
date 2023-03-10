/* Example 2 */
import { normalizeProduct, getAllProductsQuery } from "../utils";
import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";
import { ApiConfig } from "@common/types/api";

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

type ReturnType = {
  products: ProductConnection;
};

/* Example 1 */
// const getAllProducts = async (): Promise<any[]> => {
//   /* Example 1 */
//   // const products = await fetchApi();
//   /* Example 2 */
//   const products = await fetchApi<{product: ProductConnection}>({ query: getAllProductsQuery });
//   // Example 1 Recomendeed
//   return products.data;
//   // Example 2
//   //   return products;
// };

/* Example 2 */
// const getAllProducts = async (): Promise<any> => {
//   const { data } = await fetchApi<ReturnType>({
//     query: getAllProductsQuery,
//   });

//   //* Normalize and return new data!

//   return data.products;
// };

/* Example 3 */
const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];

  return products;
};

export default getAllProducts;
