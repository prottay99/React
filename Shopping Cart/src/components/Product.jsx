import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  console.log(cart);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="p-2.5 rounded-xl border border-gray-300">
      <div className="bg-gray-100 p-5 rounded-xl">
        <img
          src={product.image}
          alt=""
          className="w-full h-60 object-contain hover:scale-110 transition-all duration-300 ease-linear"
        />
      </div>
      <div className="py-5">
        <h3 className="text-md font-bold text-red-900">{product.title}</h3>
        <button
          className="bg-red-900 text-white boder-2 rounded-lg font-bold mt-5 py-2 px-4 w-full hover:bg-black cursor-pointer"
          onClick={
            cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
