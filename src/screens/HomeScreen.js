import React from "react";
import Product from "./Product/Product";

function HomeScreen(props) {
  return (
    <div>
      <Product find={props.find} />
    </div>
  );
}

export default HomeScreen;
