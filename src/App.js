import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Header from "./screens/Header";
import HomeScreen from "./screens/HomeScreen";
import ListProductScreen from "./screens/ProductListAdmin/ListProductScreen";
import Footer from "./screens/Footer/Footer";
import LoginScreen from "./screens/Login/LoginScreen";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductUpdateScreen from "./screens/ProductUpdate/ProductUpdateScreen";
import ProductCreateSreen from "./screens/ProductCreate/ProductCreateSreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container-fluid" style={{ paddingTop: "70px" }}>
        <main className="main">
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/update" component={ProductUpdateScreen} />
          <Route path="/detail" component={ProductDetail} />
          <Route path="/create" component={ProductCreateSreen} />
          <Route path="/list" component={ListProductScreen} />
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
