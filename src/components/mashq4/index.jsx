import React, { useState } from "react";

function Color() {
  let [color, setColor] = useState("#ffffff");

  function submit(e) {
    e.preventDefault();
    console.log("Tanlangan rang:", color);
  }

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        padding: "20px",
        width: "100%",
      }}
    >
      <h2>4-mashq</h2>
      <form onSubmit={submit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Color;
