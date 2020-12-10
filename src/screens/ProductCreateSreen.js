import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "../css/app.css";

import { createProduct } from "../actions/product.action";

function ProductCreateSreen(props) {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, price, image, brand, category, description });
    dispatch(
      createProduct({ name, price, image, brand, category, description })
    );
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Create Product</h3>
      {loadingSave && <div>Loading...</div>}
      {errorSave && <div>{errorSave}</div>}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name product"
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
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="int"
          className="form-control"
          placeholder="Enter brand"
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
          onChange={(e) => setDescription(e.target.value)}
          id="description"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
      <div className="form-group">
        <button className="btn btn-warning">Back</button>
      </div>
    </form>
  );
}

export default ProductCreateSreen;
