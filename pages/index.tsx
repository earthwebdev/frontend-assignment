import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/components/Layouts";

import { getDataFromApi } from "@/services/axios.service";
import HeroProducts from "@/components/HeroProducts";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Product, ProductInterface } from "@/interface/productInterface";
import ProductLists from "@/components/ProductLists";
import BounceLoader from "react-spinners/BounceLoader";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);

  const getSingleProductDatas = () => {
    const resp = getDataFromApi(
      "/products/category/jewelery?sort=desc&limit=1"
    );
    setLoading(false);
    return resp;
  };

  const getAllProducts = () => {
    const resp = getDataFromApi("/products?sort=asc&limit=20");
    return resp;
  };
  //hero image for single data
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: getSingleProductDatas,
  });
  //product all datas
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  //const product: Product = productQuery.data[0];
  //console.log(isLoading, isError, data, error);
  console.log(productQuery.data);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-0 ${inter.className}`}
    >
      <RootLayout>
        <BounceLoader
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <HeroProducts product={data} />
        <div className="container mx-auto flex flex-col md:flex-row items-center mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {productQuery?.data?.data.length > 0 &&
              productQuery?.data?.data.map((product: Product) => {
                return <ProductLists key={product.id} product={product} />;
              })}
          </div>
        </div>
      </RootLayout>
    </main>
  );
}
