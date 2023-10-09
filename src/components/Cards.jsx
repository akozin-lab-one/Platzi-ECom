import React from "react";

const Cards = ({ products, getCart , cart, setCart}) => {
  console.log("component is loading");


  if (JSON.stringify(products !== "[]")) {
    return (
      <div className="container mt-7 lg:w-[1224px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 gap-y-4">
        {products.map((pro) => {
          return [
            <div className="lg:w-72 md:w-60 w-96 mx-auto drop-shadow-md hover:scale-90 duration-75" key={pro.id}>
              <img
                className="lg:w-72 md:w-60 rounded-t-md"
                src={pro.images[0]}
                alt="productImage"
              />
              <div className="lg:w-72 md:w-60 w-96 text-center bg-gray-200 py-2 rounded-b-md">
                <h5 className="font-bold my-2">{pro.title}</h5>
                <p className="text-xs w-60 mx-auto">
                  {pro.description.slice(0,50) + "..."}
                </p>
                <button
                  className="my-2 text-[13px] bg-black text-white w-24 h-7 rounded-lg border-none hover:drop-shadow hover:scale-110 duration-75"
                  type="button"
                  onClick={()=>{getCart(setCart(cart+1))}}
                >
                  Add to Cart
                </button>
              </div>
            </div>,
          ];
        })}

      </div>
    );
  };
};

export default Cards;
