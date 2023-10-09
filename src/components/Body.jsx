import React, { useState } from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";

const Body = ({ products, getCart }) => {
  const [cart,setCart] = useState(0);
  return (
    <div>
      {/* background-image cover */}
      <div className="relative hidden md:hidden lg:block">
        <img
          className="w-screen max-h-[580px] bg-center "
          src="https://i.imgur.com/aCDF0yh.jpeg"
          alt=""
        />
        <div className="absolute left-[41%] bottom-40 w-72">
          <h1 className="font-bold text-white text-2xl tracking-wider ml-2">
            You can buy more.. <br/>on Plazi Shop...
          </h1>
        </div>
      </div>

      {/* navbar start */}
      {/* <div className=" mt-3 container px-1 lg:w-[600px] mx-auto flex justify-between">
        <h4 className="hover:scale-110 font-bold cursor-pointer">Clothes</h4>
        <h4 className="hover:scale-110 font-bold cursor-pointer">Electronics</h4>
        <h4 className="hover:scale-110 font-bold cursor-pointer">Furniture</h4>
        <h4 className="hover:scale-110 font-bold cursor-pointer">Shoes</h4>
        <h4 className="hover:scale-110 font-bold cursor-pointer">Others</h4>
      </div> */}
      <Navbar/>
      <Cards products={products} getCart={getCart} cart={cart} setCart={setCart}/>
    </div>
  );
};

export default Body;
