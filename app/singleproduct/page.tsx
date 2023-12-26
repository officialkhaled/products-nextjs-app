import { getSingleProduct } from "../helpers";
import Image from "next/image";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const idString = searchParams.id;
  const id = Number(idString);
  const product = await getSingleProduct(id);

  return (
    <div className="max-w-screen-xl mx-auto mt-10 border-[2px] border-gray-200  p-10 rounded-lg flex items-center gap-10 xl:gap-0 hover:border-gray-400 duration-300 ">
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="max-h-96"
      />
      <div className="flex flex-col gap-10 pl-20 pr-10">
        <p className="text-xl font-semibold">{product.title}</p>
        <p className="text-sm text-justify">{product.description}</p>
        <p className="text-lg font-bold text-red-500">${product.price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
