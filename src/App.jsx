import React, { useState } from "react";
import List from "./components/Mashq1";
import Text from "./components/mashq2";
import Color from "./components/mashq4";
import Pasword from "./components/Mashq3";
import Users from "./components/mashq5";
import Input from "./components/mashq6";
import "./App.css";

function App() {
  return (
    <div>
      <div className="mashq1">
        {/* <List/>  */}
        {/* <Text /> */}
        {/* <Pasword/> */}
        {/* <Color /> */}
        {/* <Users/> */}
        <Input/>
      </div>
    </div>
  );
}

export default App;
