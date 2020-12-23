import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
import Buy from "./screens/Buy/Buy";
import Payment from "./screens/Payment/Payment";
import Order from "./screens/Order/Order";
import ListOrder from "./screens/ListOrder/ListOrder";
import OrderDetail from "./screens/OrderDetail/OrderDetail";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ paddingTop: "70px" }}>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/cart" component={Cart} />
        <Route path="/update" component={ProductUpdateScreen} />
        <Route path="/detail" component={ProductDetail} />
        <Route path="/create" component={ProductCreateSreen} />
        <Route path="/list" component={ListProductScreen} />
        <Route path="/buy" component={Buy} />
        <Route path="/payment" component={Payment} />
        <Route path="/order" component={Order} />
        <Route path="/list-order" component={ListOrder} />
        <Route path="/order-detail/:id" component={OrderDetail} />
      </div>

      <Faculity />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
