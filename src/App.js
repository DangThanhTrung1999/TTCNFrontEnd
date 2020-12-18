import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Header from "./screens/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import ListProductScreen from "./screens/ProductListAdmin/ListProductScreen";
import Footer from "./screens/Footer/Footer";
import LoginScreen from "./screens/Login/LoginScreen";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductUpdateScreen from "./screens/ProductUpdate/ProductUpdateScreen";
import ProductCreateSreen from "./screens/ProductCreate/ProductCreateSreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import Faculity from "./screens/Faculity/Faculity";
import Profile from "./screens/Profile/Profile";
import Cart from "./screens/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container-fluid" style={{ paddingTop: "70px" }}>
        <main className="main">
          <Route path="/" exact component={HomeScreen} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/cart" component={Cart} />
          <Route path="/update" component={ProductUpdateScreen} />
          <Route path="/detail" component={ProductDetail} />
          <Route path="/create" component={ProductCreateSreen} />
          <Route path="/list" component={ListProductScreen} />
        </main>
      </div>

      <Faculity />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
