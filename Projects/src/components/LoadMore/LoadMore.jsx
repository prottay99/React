import { useEffect, useState } from "react";
import "./style.css";

export const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorMsg, seterrorMsg] = useState(null);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      seterrorMsg(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 120) setDisableBtn(true);
  }, [products]);

  if (loading) {
    return <div>Loading products... Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Found!</div>;
  }

  return (
    <section className="products-container">
      <ul className="products-wraper">
        {products && products.length
          ? products.map((item) => {
              return (
                <li key={item.id}>
                  <div className="product-card">
                    <img src={item.thumbnail} alt={item.title} />
                    <b>Product ID:{item.id}</b>
                    <p>{item.title}</p>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
      <div>
        <button
          disabled={disableBtn}
          className="load-btn"
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disableBtn ? <b>You have reached the limit</b> : null}
      </div>
    </section>
  );
};
