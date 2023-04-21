import React from "react";
import notes from "../notes";
import Todolist from "./Todolist";


function NoteEx() {
  return (
    <div >
      {
      notes.map((noteItem) => {
      return (
        //created properties to Todolist Component from notes.js data and then use this props in other component to render in your place in webpage
      <Todolist 
      key={noteItem.key}    //for identification but not use for further more
      content={noteItem.content}
      />
      );
      })
      } 
    </div>
  );
}

export default NoteEx;
