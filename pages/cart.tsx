import RootLayout from "@/components/Layouts";
import { Product } from "@/interface/productInterface";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  clearCart,
  removeCart,
  getTotal,
} from "@/store/CartSlice";
import { useRouter } from "next/router";
interface cartCustom extends Product {
  cartQuantity: number;
}
const cart = () => {
  const route = useRouter();
  const products = useSelector((state: any) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state: any) => state.cart.cartTotalAmount);
  const cartTotalQuantity = useSelector((state: any) => state.cart.cartTotalQuantity);
  const dispatch = useDispatch();
  console.log(products.length);
  useEffect(() => {
    dispatch(getTotal());
  })
  let totalAmount = (cartTotalAmount + 4.99).toFixed(2);
  console.log(cartTotalAmount );
  return (
    <>
      <div className="container mx-auto my-6 h-screen bg-gray-100 pt-20 ">
        <Link
          href={"/"}
          className="ps-20 ms-20 mb-10 text-center text-2xl font-bold"
        >
          Back To Home
        </Link>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {products.length > 0 &&
              products.map((product: cartCustom) => {
                return (
                  <div
                    key={product.id}
                    className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {product.title}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">
                          ${product.price}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(decreaseCart(product));
                            }}
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            -{" "}
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            value={product.cartQuantity}
                            readOnly
                            min="1"
                          />
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(addToCart(product));
                            }}
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">
                            ${product.price * product.cartQuantity}
                          </p>
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(removeCart(product));
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            {products.length <= 0 && (
              <>
                <h2 className="mb-10 text-center text-2xl font-bold">
                  The cart is empty.
                </h2>
                <button
                  onClick={(e) => route.push("/")}
                  className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                >
                  Continue Shopping
                </button>
              </>
            )}
            {products.length > 0 && (
              <button
                onClick={(e) => dispatch(clearCart())}
                className="mt-6 w-1/2 rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              >
                Clear Cart
              </button>
            )}
          </div>

          {products.length > 0 && (
            <>
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">${cartTotalAmount}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">$4.99</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">${totalAmount}</p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Check out
                </button>

                <button
                  onClick={(e) => route.push("/")}
                  className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )
          }


        </div>
      </div>
    </>
  );
};

export default cart;
