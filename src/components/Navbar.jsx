import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" mt-3 container px-1 lg:w-[600px] mx-auto flex justify-between">
      <NavLink to="/clothes">
        <h4 className="hover:scale-110 font-bold cursor-pointer">Clothes</h4>
      </NavLink>
      <NavLink to="/electronics">
      <h4 className="hover:scale-110 font-bold cursor-pointer">Electronics</h4>
      </NavLink>
      <NavLink to="/furniture">
      <h4 className="hover:scale-110 font-bold cursor-pointer">Furniture</h4>
      </NavLink>
      <NavLink to="/shoes">
      <h4 className="hover:scale-110 font-bold cursor-pointer">Shoes</h4>
      </NavLink>
      <NavLink to="/Others">
      <h4 className="hover:scale-110 font-bold cursor-pointer">Others</h4>
      </NavLink>
    </div>
  );
};

export default Navbar;
