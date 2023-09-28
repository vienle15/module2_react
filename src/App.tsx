import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Headers from "./pages/components/Header";
import Footers from "./pages/components/Footer";
import Main from "./pages/components/Main/main";

function App() {
  return (
    <div className="App">
      <Headers />
      <Main />
      <Footers />
    </div>
  );
}

export default App;
