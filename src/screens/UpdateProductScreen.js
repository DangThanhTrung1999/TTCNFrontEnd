import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { createProduct } from "../actions/product.action";

function UpdateProductScreen(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const productSave = useSelector((state) => state.productSave);

  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploading(true);
    axios
      .post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };
  const { handleClickBack, handleClickEdit, product } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, price, image, brand, category, description });
    dispatch(
      createProduct({ name, price, image, brand, category, description })
    );
  };
  return (
    <form className="list-product-form" onSubmit={handleSubmit}>
      <h3>Update Product</h3>
      {loadingSave && <div>Loading...</div>}
      {errorSave && <div>{errorSave}</div>}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name product"
          value={product.name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="int"
          className="form-control"
          placeholder="Enter price"
          value={product.price}
          onChange={(e) => setPrice(e.target.value)}
          id="price"
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          hidden
          name="image"
          value={product.image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="file"
          className="form-control"
          placeholder="No file choose"
          id="image"
          onChange={uploadFile}
        />
        {uploading && <div>Uploading...</div>}
        <img
          style={{ width: "100%", paddingTop: "2rem", paddingBottom: "2rem" }}
          src={`api/uploads/${product.image}`}
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="int"
          className="form-control"
          placeholder="Enter brand"
          value={product.brand}
          onChange={(e) => setBrand(e.target.value)}
          id="brand"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="int"
          className="form-control"
          placeholder="Enter category"
          value={product.category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="int"
          className="form-control"
          placeholder="Enter description"
          value={product.description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
      <div className="form-group">
        <button className="btn btn-warning" onClick={() => handleClickBack()}>
          Back to list
        </button>
      </div>
    </form>
  );
}

export default UpdateProductScreen;
