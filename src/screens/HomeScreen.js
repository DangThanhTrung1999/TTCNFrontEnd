import React from "react";
import data from "../data";
import anh from "../asserts/images/d2.jpeg";
function HomeScreen(props) {
  return (
    <div>
      <h1>This is home screen</h1>

      <ul className="products row">
        {data.products.map((product) => (
          <li className='col-4' key={product._id}>
            <p>{product.name}</p>
            <p>{product.category}</p>
            <img src={anh} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeScreen;
