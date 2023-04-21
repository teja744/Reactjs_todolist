import React from "react";


function Todolist(props) {
  return (
      <div class="item">
        <h1>{props.content}</h1>
        <input type="checkbox" />
        </div>
  );
}

export default Todolist;
