import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./ProductUpdateScreen.css";
import { detailsProduct, updateProduct } from "../../actions/product.action";

function ProductUpdateScreen(props) {
  const productDetail = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetail;
  let pr = { ...product };
  let { _id } = product ? product : "";
  let id = props.location.search.split("=")[1];
  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [id]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  console.log(product);
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
    dispatch(
      updateProduct({ _id, name, price, image, brand, category, description })
    );
    setTimeout(() => {
      props.history.push("/list");
    }, 1000);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Update Product</h1>
      {loading && <div>Loading...</div>}
      {error && (
        <p style={{ color: "red" }}>
          Have error when loading to upload product.Please try again.
        </p>
      )}

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          Value={pr ? pr.name : ""}
          type="text"
          className="form-control form-create"
          placeholder="Enter name product"
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="int"
          Value={pr ? pr.price : ""}
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
          Value={pr ? pr.image : ""}
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
        <img
          style={{ width: "100%", paddingTop: "2rem", paddingBottom: "2rem" }}
          src={`api/uploads/${pr ? pr.image : ""}`}
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="int"
          className="form-control form-create"
          placeholder="Enter brand"
          Value={pr ? pr.brand : ""}
          onChange={(e) => setBrand(e.target.value)}
          id="brand"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="int"
          className="form-control form-create"
          placeholder="Enter category"
          Value={pr ? pr.category : ""}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="int"
          className="form-control form-create"
          placeholder="Enter description"
          Value={pr ? pr.description : ""}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-create">
          Update
        </button>
      </div>
      <div className="form-group">
        <button
          className="btn btn-warning btn-create"
          onClick={() => {
            props.history.push("/list");
          }}
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default ProductUpdateScreen;
