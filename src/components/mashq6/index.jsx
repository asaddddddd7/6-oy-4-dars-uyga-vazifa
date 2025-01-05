import React, { useState } from "react";

function Input() {
  let [field, setfield] = useState([]);
  function add(e) {
    e.preventDefault();
    let input = {
      value: "",
      id: Date.now(),
    };
    let copied = [...field];
    copied.push(input);
    setfield(copied);
    }
    function change(e,fiel) {
        let copied = [...field]
        copied = copied.map((value, index) => {
            if (fiel.id==value.id) {
                value.value=e.target.value
            }
            
            return value
        });
        setfield(copied)
    }
    function save(e) {
        e.preventDefault()
        console.log(field);
        
    }
  return (
    <div>
      <button onClick={add}>input add</button>
      <form>
        {field.length > 0 &&
          field.map((value, index) => {
            return (
              <input
                type="text"
                value={value.value}
                key={index}
                onChange={(e) => {
                  change(e, value);
                }}
              />
            );
          })}
          </form>
          <button onClick={save}>save</button>
    </div>
  );
}

export default Input;
