// import type { InferGetStaticPropsType } from "next";
// /* Get all products separation */
// import getAllProducts from "@framework/product/get-all-products";
// import { getConfig } from "@framework/api/config";

// export async function getStaticProps() {
//   const config = getConfig()
//   const products = await getAllProducts(config);

//   return {
//     props: {
//       products,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 4 * 60 * 60, // In seconds
//   };
// }

// export default function Home({
//   products,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   /* Example 1 */
//   // getAllProducts()

//   return <div>{JSON.stringify(products)}</div>;
// }
