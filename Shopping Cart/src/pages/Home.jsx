import { useEffect, useState } from "react";
import { fetchProducts } from "../api/Api";
import { Circles } from "react-loader-spinner";
import { Product } from "../components/Product";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setloading(true);
    try {
      const res = await fetchProducts();
      setloading(false);
      if (res.status === 200) {
        setProducts(res.data);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products &&
            products.map((productItem) => (
              <Product key={productItem.id} product={productItem} />
            ))}
        </div>
      )}
    </div>
  );
};
