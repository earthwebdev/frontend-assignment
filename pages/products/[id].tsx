import RootLayout from "@/components/Layouts";
import { getDataFromApi } from "@/services/axios.service";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Product } from "@/interface/productInterface";
import RatingComp from "@/components/RatingComp";
import BounceLoader from "react-spinners/BounceLoader";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "@/store/CartSlice";

const ProductDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const dispatch = useDispatch();
  const getSingleProductDatas = (id: any) => {
    const resp = getDataFromApi("/products/" + id);
    setLoading(false);
    return resp;
  };

  //hero image for single data
  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProductDatas(id),
  });
  //console.log(data);
  const btnAddCartHandler = (product: Product) => {
    dispatch(addToCart(product));
    //console.log(product);
    router.push('/cart');
  };
  return (
    <RootLayout>
      <div className="container mx-auto flex flex-col md:flex-row items-center mt-4">
        <BounceLoader
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {data && (
          <>
            <div className="w-full lg:w-1/2 lg:py-6 text-center">
              <img className="w-fluid" src={data.data.image} />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
              <h1 className="font-bold text-3xl my-4">{data.data.title}</h1>
              <p className="leading-normal mb-4">{data.data.description}</p>

              <p className="uppercase tracking-loose mb-4">
                Category: {data.data.category}
              </p>
              <div className="leading-normal mb-4">
                <RatingComp rating={data.data.rating?.rate} />{" "}
              </div>

              <p className="uppercase tracking-loose mb-4">
                ${data.data.price}
              </p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  btnAddCartHandler(data.data);
                }}
                className="bg-gray-500 hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent"
              >
                Add To Cart
              </button>
            </div>
          </>
        )}
      </div>
    </RootLayout>
  );
};

export default ProductDetailsPage;
