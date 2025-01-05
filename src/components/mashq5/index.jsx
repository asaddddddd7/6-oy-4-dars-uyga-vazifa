import React, { useState } from "react";
function Users() {
    let [name, setName] = useState('')
    let [lastName, setLastName] = useState('')
    let [deta,setdeta]=useState('')
    let [data,setData]=useState([])
  function btn(e) {
    e.preventDefault();
    let user = {
        name: name,
        lastName: lastName,
        data:deta
      }
      let copied = [...data]
      copied.push(user)
      setData(copied)
      console.log(user);      
  }
  return (
    <div>
      <form onSubmit={btn}>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="enter name" value={name} />
        <input type="text" onChange={(e)=>{setLastName(e.target.value)}} placeholder="enter last name" value={lastName} />
        <input type="date" onChange={(e)=>{setdeta(e.target.value)}} value={deta} />
        <button>save</button>
      </form>
    </div>
  );
}
export default Users;
