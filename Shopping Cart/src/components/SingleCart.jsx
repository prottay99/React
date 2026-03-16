import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

export const SingleCart = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-red-600 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
        </div>

        <div>
          <button
            className="bg-red-900 text-white boder-2 rounded-lg font-bold mt-5 py-2 px-4 w-full hover:bg-black cursor-pointer"
            onClick={handleRemoveFromCart}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
};
