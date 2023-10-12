import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state) as number;
  const listTodo = useSelector((state) => state) as string[];
  const [newTodo, setNewTodo] = useState<string>("");
  const handleDelete = (index: number) => {
    dispatch({ type: "Delete", index });
  };
  console.log("11111111", listTodo);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "UP" })}>UP</button>
      <button onClick={() => dispatch({ type: "DOWN" })}>DOWN</button>
      <button onClick={() => dispatch({ type: "x10" })}>x10</button>
      <h2>{counter}</h2>

      <input
        type="text"
        placeholder="Nhập công việc mới"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "Create", payload: newTodo });
          setNewTodo(""); // Xóa nội dung của ô input sau khi tạo công việc mới
        }}
      >
        Tạo mới
      </button>
      <h1>Danh sách công việc:</h1>
      <ul>
        {listTodo.map((todo: string, index: number) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
