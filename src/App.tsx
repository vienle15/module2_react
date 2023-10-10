import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getDataUser } from "./api";

function App() {
  const [data, setData] = useState<any[]>([]);
  const res = getDataUser(setData);
  return (
    <div className="App">
      <input type="text" onClick={(e) => handleSearch(e.target.value)} />
      <button onClick={handleSearch}></button>
    </div>
  );
}

export default App;
