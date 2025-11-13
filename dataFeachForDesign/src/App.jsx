import "./App.css";
import { product } from "./data.js";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-[50px] text-center">
        Single product
      </h1>
      <div>
        <div className="left"></div>
        <div className="right">
          <div className="breadcumb flex gap-2">
            {product.breadcumbs.map((item, index) => (
              <div key={index}>
                <a href={item.link} className="hover:text-red-500">
                  {item.text}
                </a>
                {index < product.breadcumbs.length - 1 && <span> / </span>}
              </div>
            ))}
          </div>
          <h2 className="text-2xl">{product.title}</h2>
          <h4 className="text-2xl">
            {product.price.currency}
            {product.price.sale}{" "}
            <span className="line-through">{product.price.regular}</span>
          </h4>
          <p>{product.summary}</p>
          <div className="flex gap-1">
            <h4>Categories:</h4>
            {product.categories.map((item, index) => (
              <p key={index}>
                {item.text}
                {index < product.categories.length - 1 && <span> , </span>}
              </p>
            ))}
          </div>

          <div className="flex gap-1">
            <h4>Tags:</h4>
            {product.tags.map((item, index) => (
              <p key={index}>
                {item.text}
                {index < product.tags.length - 1 && <span> , </span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
