import { useEffect } from "react";
import { useProductStore } from "../useStoreTheme/storeProduct";
import ProductCard from "../components/productcard";

function Home() {
  const { products, loading, fetchProduct, error } = useProductStore();
  console.log(products);

  useEffect(() => {
    fetchProduct();
    console.log("produit:  ", products);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center ml-20 mt-20">
      <div className="flex justify-center items-end  gap-10">
        <button
          className="btn btn-primary font-bold text-lg text-white"
          aria-label="Add product"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
          </svg>
          Add product
        </button>

        <button className="btn btn-ghost btn-circle" onClick={fetchProduct}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
            />
          </svg>
        </button>
      </div>
      {error && <p className="text-red-500">Error: {error}</p>}

      { loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            products.map(product => <ProductCard key={product.id} product={product} />)
          }
        </div>
      )
      }
    </div>
  );
}

export default Home;
