import React, { useState, useEffect } from "react";

function ServerData(){
    const [backendData,setBackendData] = useState([{}]);
  
    useEffect(() =>{
      fetch("/api").then(
        response=> response.json())
        .then(
        data => {
          setBackendData(data.backendData)
        });
    },[]);
    return(
        <div>
        {(typeof backendData==='undefined') ? (
            <p>Loading...</p>
          ):(
            backendData.map((todo) => (
            <div key={todo.id}>
                <p>{todo.title}</p>
                <p>{todo.id}</p>
            </div>
            ))
          )}
        </div>
    );
}

export default ServerData;