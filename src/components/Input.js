import React, { useState } from "react";
import Todolist from "./Todolist";

function Input() {
  const [count, setcount] = useState("");
  const [arr, setarr] = useState([]);

  const itemevents = (event) => {
    setcount(event.target.value);
  };

  const addtask = () => {
    setarr((oldtasks) => {
      return [...oldtasks, count];
    });
    setcount("");
  };

  const deleteitem=(id)=>{
    setarr((oldtasks)=>{
      return oldtasks.filter((arrELem,index)=>{
        return index!==id;
      })
    })
}

  return (
    <div>
      <div className="container">
        <div className="container__item">
          <form className="form">
            <input
              type="text"
              className="form__field"
              placeholder="text here"
              value={count}
              onChange={itemevents}
            />
          </form>
        </div>

        {/* Button here */}
        <div>
          <br />
          <button className="button-56" type="button" onClick={addtask}>
            Add Task
          </button>
          <br />
        </div>
      </div>

      {/* List here */}
      <div className="Listdiv">
        <ol>
          {arr.map((itemval, index) => {
            return <Todolist text={itemval} key={index} id={index} onSelect={deleteitem}/>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default Input;
