import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { SingleCart } from "../components/SingleCart";

export const Cart = () => {
  const [totalCart, setCartTotal] = useState(0);

  const { cart } = useSelector((state) => state);

  console.log(cart);

  useEffect(() => {
    setCartTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      {cart && cart.length ? (
        <div className="flex">
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem, index) => (
                <SingleCart key={index} cartItem={cartItem} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h2 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h2>
              <p>
                <span className="text-gray-800 font-bold">Total Item</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span>: {totalCart}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Cart is Empty
          </h1>
          <NavLink to="/">
            <button className="bg-red-900 text-white boder-2 rounded-lg font-bold mt-5 py-2 px-4 w-full hover:bg-black cursor-pointer">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};
