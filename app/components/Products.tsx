"use client";

import Link from "next/link";
import Image from "next/image";

interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface Props {
  products: ProductsProps[];
}

const Products = ({ products }: Props) => {
  console.log(products);

  return (
    <>
      <h1 className="text-center m-10 mb-2 font-bold text-3xl">
        PRODUCTS LIST
      </h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10 ">
        {products.map((item) => (
          <Link
            href={{ pathname: "../singleproduct", query: { id: item.id } }}
            key={item.id}
          >
            <div className="border-[2px] p-5 border-gray-100 rounded-lg overflow-hidden min-h-96 max-h-96 w-auto hover:border-gray-600 duration-300 ">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-32 h32 min-h-40 max-h-40 mx-auto mb-8 object-contain"
              />
              <div className="px-4 pb-2 mt-10 text-sm flex flex-col gap-1 items-center">
                <p className="text-gray-600 text-center pb-5">{item.title}</p>
                <p className="text-base font-bold text-red-500">
                  ${item.price}
                </p>
                <div className="">
                  <button className="uppercase text-xs font-semibold hover:text-blue-700 duration-200">
                    More info
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
