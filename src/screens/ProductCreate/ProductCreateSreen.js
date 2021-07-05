import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./ProductCreateScreen.css";
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { createProduct } from "../../actions/product.action";

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
  const form = useRef();
  let checkBtn = useRef();
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

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
    form.current.validateAll();
    e.preventDefault();
    if (checkBtn.context._errors.length === 0) {
      dispatch(
        createProduct({ name, price, image, brand, category, description })
      );
      setTimeout(() => {
        props.history.push("/list");
      }, 1000);
    }
  };
  return (
    <Form className="form" onSubmit={handleSubmit} ref={form}>
      <h1>Create Product</h1>
      {loadingSave && <div>Loading...</div>}
      {errorSave && (
        <p style={{ color: "red" }}>
          Have error when create product.Please try again.
        </p>
      )}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <Input
          validations={[required]}
          type="text"
          className="form-control form-create"
          placeholder="Enter name product"
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <Input
          validations={[required]}
          type="int"
          className="form-control form-create"
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
          style={{ paddingBottom: "30px" }}
          className="form-control form-create"
          placeholder="No file choose"
          id="image"
          onChange={uploadFile}
        />
        {uploading && <div>Uploading...</div>}
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <Input
          validations={[required]}
          type="text"
          className="form-control form-create"
          placeholder="Enter brand"
          onChange={(e) => setBrand(e.target.value)}
          id="brand"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <Input
          validations={[required]}
          type="text"
          className="form-control form-create"
          placeholder="Enter category"
          onChange={(e) => setCategory(e.target.value)}
          id="category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <Input
          validations={[required]}
          type="text"
          className="form-control form-create"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
          id="description"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-create">
          Create
        </button>
      </div>
      <div className="form-group">
        <button
          className="btn btn-warning btn-create"
          onClick={() => {
            props.history.push("/");
          }}
        >
          Back
        </button>
      </div>
      <CheckButton
        style={{ display: "none" }}
        ref={(c) => {
          checkBtn = c;
        }}
      />
    </Form>
  );
}

export default ProductCreateSreen;
