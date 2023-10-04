import React, { useState } from "react";

function UserManagement() {
  const [valueInput, setValueInput] = useState("");
  const [data, setData] = useState<string[]>([]);
  const handleAdd = () => {
    setData([...data, valueInput]);
    setValueInput("");
  };
  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setValueInput(event.target.value)
          }
          value={valueInput}
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {data.map((item, index) => (
            <>
              <li key={index}>{item}</li>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UserManagement;
