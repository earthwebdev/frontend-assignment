import RootLayout from "@/components/Layouts";
import ProductLists from "@/components/ProductLists";
import { Product } from "@/interface/productInterface";
import { getDataFromApi } from "@/services/axios.service";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, Suspense } from "react";
import BounceLoader from "react-spinners/BounceLoader";

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  let count = 0;
  const router = useRouter();
  let { query }: any = router.query || "";
  console.log(query);
  //query = query?.toLowerCase();
  const getAllProductsByQuery = () => {
    const resp = getDataFromApi("/products?sort=asc&limit=20");
    setLoading(false);
    return resp;
  };

  //product all datas
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsByQuery,
  });
  //console.log(productQuery);

  return (
    <RootLayout>
      <BounceLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className="container mx-auto flex flex-col md:flex-row items-center mt-4">
        <h2>
          Search <span className="font-bold">{query?.toUpperCase()}</span>
        </h2>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {productQuery?.data?.data.length > 0 &&
            productQuery?.data?.data.map((product: Product, index: number) => {
              if (product.title.toLowerCase().includes(query?.toLowerCase())) {
                count++;
                return <ProductLists key={product.id} product={product} />;
              }
            })}

          {productQuery?.data?.data.length > 0 ? (
            <>{count === 0 ? <>No product founds</> : ""}</>
          ) : (
            <>No product founds</>
          )}
        </div>
      </div>
    </RootLayout>
  );
};

export default SearchPage;
