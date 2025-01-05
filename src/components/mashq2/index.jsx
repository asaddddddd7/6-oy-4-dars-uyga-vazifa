import React, { useState } from "react";

function Text() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  function save(e) {
    e.preventDefault();
    if (name) {
      const reversedName = name.split("").reverse().join("");
      const user = {
        name: reversedName,
      };
      setData([...data, user]);
    }
  }

  return (
    <div>
      <h2>2-mashq</h2>
      <form onSubmit={save}>
        <input
          type="text"
          placeholder="so`z yozing"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>save</button>
      </form>
      <div className="wrapper">
        {data.length > 0 &&
          data.map((value, index) => (
            <div key={index}>
              <h2>{value.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Text;
