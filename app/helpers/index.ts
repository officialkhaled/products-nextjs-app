const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const getSingleProduct = async (id: number) => {
  const item = await getData();
  const singleItem = await item.find((product: any) => product.id === id);
  return singleItem;
};
