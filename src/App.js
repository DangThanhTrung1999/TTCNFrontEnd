import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import DetailScreen from "./screens/DetailScreen";
import Header from "./screens/Header";
import HomeScreen from "./screens/HomeScreen";
import ListProductScreen from "./screens/ListProductScreen";
import ProductCreateSreen from "./screens/ProductCreateSreen";
import Product from "./screens/Product/Product";
import Faculity from "./screens/Faculity/Faculity";
import Footer from "./screens/Footer/Footer";
import LoginScreen from "./screens/Login/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container-fluid">
        <main className="main">
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/detail" component={DetailScreen} />
          <Route path="/create" component={ProductCreateSreen} />
          <Route path="/list" component={ListProductScreen} />
        </main>
      </div>
      <Product />
      <Faculity />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
