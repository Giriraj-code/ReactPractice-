import React from "react";
import { Link, Outlet } from "react-router-dom";
const Product = () => {
  return (
    <div className="flex justify-center gap-10 py-4">
      {/* <h1>ProductPage</h1> */}
      <Link className="text-xl font-bold" to="/product/men">
        Men
      </Link>
      <Link className="text-xl font-bold" to="/product/women">
        Women
      </Link>
      <Link className="text-xl font-bold" to='/product/kids'>Kids</Link>
      <Outlet />{" "}
      {/* This is used to render the child routes  mtb baki ki chize kider dikhne vali he */}
    </div>
  );
};

export default Product;
