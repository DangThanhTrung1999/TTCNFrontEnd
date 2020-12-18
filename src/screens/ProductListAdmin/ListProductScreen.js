import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productList, deleteProduct } from "../../actions/product.action";
import "./ListProductScreen.css";
function ListProductScreen(props) {
  const listProduct = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);
  const handleEditProduct = (product) => {
    props.history.push(`/update?id=${product._id}`);
  };

  const handleDeleteProduct = (product) => {
    setTimeout(() => {
      dispatch(deleteProduct(product._id));
    }, 1000);
  };
  const productDelete = useSelector((state) => state.productDelete);

  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  useEffect(() => {
    dispatch(productList());
  }, [successDelete]);

  return (
    <div className="list-product">
      <h1 style={{ textAlign: "center", margin: "20px" }}>LIST PRODUCT</h1>
      <table className="table table-bordered">
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
              <td>{new Intl.NumberFormat().format(item.price)}</td>
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
                  className="btn btn-primary list-product-btn"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleEditProduct(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger list-product-btn"
                  onClick={() => handleDeleteProduct(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProductScreen;
