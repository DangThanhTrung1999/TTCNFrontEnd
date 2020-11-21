import React, { useState } from "react";
import axios from 'axios';
import "../css/app.css";

function ProductCreateSreen(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setUploading(true);
    axios
      .post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
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

  return (
    <form className="form">
      <h3>Create Product</h3>
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter name product"
          id="name"
        />
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input
          type="int"
          class="form-control"
          placeholder="Enter price"
          id="price"
        />
      </div>
      <div class="form-group">
        <label for="image">Image:</label>
        <input type="text" hidden />
        <input
          type="file"
          class="form-control"
          placeholder="No file choose"
          id="image"
          onChange={uploadFileHandler}
        />
        {uploading && <div>Uploading...</div>}
      </div>
      <div class="form-group">
        <label for="brand">Brand:</label>
        <input
          type="int"
          class="form-control"
          placeholder="Enter brand"
          id="brand"
        />
      </div>
      <div class="form-group">
        <label for="category">Category:</label>
        <input
          type="int"
          class="form-control"
          placeholder="Enter category"
          id="category"
        />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <input
          type="int"
          class="form-control"
          placeholder="Enter description"
          id="description"
        />
      </div>
      <div className="form-group">
        <button type="submit" class="btn btn-primary">
          Create
        </button>
      </div>
      <div className="form-group">
        <button type="submit" class="btn btn-primary">
          Back
        </button>
      </div>
    </form>
  );
}

export default ProductCreateSreen;
