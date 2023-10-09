import React from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { publicRouter } from "./routes";
function App() {
  return (
    <>
      {/* Navigation*/}
      <Header />
      <Routes>
        {publicRouter.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      {/* Footer*/}
      <Footer />
    </>
  );
}

export default App;
