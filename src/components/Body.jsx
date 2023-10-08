import React from "react";
import Cards from "./Cards";

const Body = ({ products, getCart }) => {
  return (
    <div>
      {/* background-image cover */}
      <div className="relative hidden md:hidden lg:block">
        <img
          className="w-screen max-h-[580px] bg-center "
          src="https://i.imgur.com/aCDF0yh.jpeg"
          alt=""
        />
        <div className="absolute left-[43%] bottom-32 w-44">
          <h1 className="font-bold text-white text-2xl tracking-wider ml-2">
            Black Hoodie
          </h1>
          {/* <p className="text-white text-center">$ 878</p>
          <button className="border border-gray-100 ml-10 text-white rounded-md w-24 h-10 hover:scale-110 duration-75 hover:drop-shadow-md">
            add to cart
          </button> */}
        </div>
      </div>

      {/* navbar start */}
      <div className=" mt-3 container px-1 lg:w-[600px] mx-auto flex justify-between">
        <h4 className="hover:scale-110 font-bold cursor-pointer">Clothes</h4>
        <h4 className="hover:scale-110 font-bold cursor-pointer">Electronics</h4>
        <h4 className="hover:scale-110 font-bold cursor-pointer">Furniture</h4>
        <h4 className="hover:scale-110 font-bold cursor-pointer">Shoes</h4>
        <h4 className="hover:scale-110 font-bold cursor-pointer">Others</h4>
      </div>
      <Cards products={products} getCart={getCart}/>
    </div>
  );
};

export default Body;
