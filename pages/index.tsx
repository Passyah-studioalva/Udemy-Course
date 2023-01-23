import type { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const products = [1, 2, 3];

  return {
    props: {
      products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 4 * 60 * 60, // In seconds
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{products}</div>;
}
