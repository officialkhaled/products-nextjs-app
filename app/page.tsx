import Products from "./components/Products";

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export default async function Home() {
  const products = await getData();
  console.log(products);
  return (
    <main>
      <Products products={products}></Products>
    </main>
  );
}
