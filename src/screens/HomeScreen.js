import React from "react";
import anh from "../asserts/images/d2.jpeg";
import Product from "./Product/Product";
import Faculity from "./Faculity/Faculity";
function HomeScreen(props) {
  return (
    <div>
      <Product />
      <Faculity />
    </div>
  );
}

export default HomeScreen;
