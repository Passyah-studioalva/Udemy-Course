const fetchApi = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  // Example 1 Recomendeed
    return { data };
  // Example 2
//   return data;
};

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi();
  // Example 1 Recomendeed
    return products.data;
  // Example 2
//   return products;
};

export default getAllProducts;
