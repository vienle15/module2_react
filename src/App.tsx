import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserManagement from "./pages/UseStateEX";
import BMI from "./pages/UseEffect";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<number[]>([]);

  // const [input, valueInput] = useState < number;

  const handleChangeCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <button onClick={handleChangeCount}>Up</button>
      <br />
      <br />
      <h1>{count}</h1>
      <UserManagement />
      <BMI />
    </div>
  );
}

export default App;
