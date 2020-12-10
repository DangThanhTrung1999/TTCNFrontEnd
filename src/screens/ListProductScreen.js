import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { animations } from "react-animation";

import { productList } from "../actions/product.action";
import "../css/app.css";
import UpdateProductScreen from "./UpdateProductScreen";
function ListProductScreen(props) {
  const listProduct = useSelector((state) => state.productList);
  const [showForm, setShowForm] = useState(false);
  const { loading, products, error } = listProduct;
  const [productEdit, setProductEdit] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productList());
  }, []);
  const handleEditProduct = (product) => {
    setShowForm(true);
    setProductEdit(product);
  };
  const handleClickEdit = () => {
    setShowForm(false);
  };
  const handleClickBack = () => {
    setShowForm(false);
  };
  return (
    <div className="list-product">
      <div
        className="list-product-edit"
        style={
          showForm ? { display: "block", animation: animations.fadeInUp } : {}
        }
      >
        <UpdateProductScreen
          product={productEdit}
          handleClickEdit={handleClickEdit}
          handleClickBack={handleClickBack}
        />
      </div>
      <h3 style={{ textAlign: "center", margin: "20px" }}>
        This is list product
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.products.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.brand}</td>
              <td>
                <img
                  src={`/api/uploads/${item.image}`}
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleEditProduct(item)}
                >
                  Edit
                </button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProductScreen;
