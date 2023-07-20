import { useRouter } from 'next/router';
import React from "react";

const ProductLists = ({ product }: any) => {
    const router = useRouter();

	const btnClickHandler = (id: number) => {
		router.push('/products/'+id);
	}
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-[15px] mr-[15px]">
        <img className="h-75 w-full" src={product?.image} alt={product?.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product?.title.length > 20?product?.title.slice(0,20)+'...':product?.title}</div>
          <p className="text-gray-700 text-base">{product?.price}</p>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{product?.category}
          </span>
        </div> */}
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              btnClickHandler(product?.id);
            }}
            className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent"
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductLists;
