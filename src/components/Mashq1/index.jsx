import React from "react";
import { useState } from "react";
import "./index.css";
function List() {
  let [name, setName] = useState("");
  let [data, setData] = useState([]);
  function submit(e) {
    e.preventDefault();
    if (name.length < 3) {
      alert("bunday ism bolishi munkun emas");
      return;
    }
    let user = {
      name: name,
    };
    const copied = [...data];
    copied.push(user);
    setData(copied);
    setName("");
  }
  function clear() {
    setData([])
  }
  return ( 
    <div>
      <h1>1-mashq</h1>
      <form>
        <input
          className="input1"
          type="text"
          placeholder="ismingizni kiritng"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={submit} className="save">
          save
        </button>
      </form>
      {data.length > 0 &&
        data.map((value, index) => {
          return (
            <div className="card" key={index}>
              <h2>{value.name}</h2>
            </div>
          );
        })}
      <button onClick={clear}>delete</button>
    </div>
  );
}
export default List;
