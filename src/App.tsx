import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalAuth from "./components/ModalAuth";

function App() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(true);
  };

  return (
    <div className="App">
      <Header onShow={handleToggle} />
      <ModalAuth show={show} onClose={() => setShow(false)} />
    </div>
  );
}

export default App;
