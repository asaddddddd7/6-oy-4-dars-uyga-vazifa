import React, { useState } from "react";

function Pasword() {
  let [show, setshow] = useState(false);
  return (
    <div>
      <input type={show ? "text" : "password"} placeholder="parolni kiriting" />
      <span onClick={()=>{setshow(!show);}}>show</span>
    </div>
  );
}
export default Pasword;
