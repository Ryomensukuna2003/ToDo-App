import React from "react";

const Todolist = (props) => {
  return (
    <li>
      {props.text}
      <i className="fa fa-times"
         aria-hidden="true"
         onClick={()=>{
          props.onSelect(props.id)
         }} />
    </li>
  );
};

export default Todolist;
