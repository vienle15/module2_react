import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import ProductList from "./Shop/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
