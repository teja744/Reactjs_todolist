import React, { useState ,useEffect} from 'react';
import axios from 'axios';

function Form() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTodoItems = async () => {
      const response = await fetch('http://localhost:3001/note');
      const todoItems = await response.json();
      setItems(todoItems);
    };
    fetchTodoItems();
  }, []);

  const handleChange = (event) => {
    const newValue = (event.target.value);
    setValue(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value.trim() !== '') {
      // Send the new item to the server
      const response = await axios.post('http://localhost:3001/note', {
        text: value
      });
      // Add the new item to the list of items
      setItems([...items, response.data]);
      setValue('');
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/note/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    setItems(items.filter((item) => item._id !== id));
  };
 

  return (
    <div className='box'>
      <h2>Your To-Do-List is here</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userINPUT" value={value} onChange={handleChange} autoComplete='off' />
        <button class="btn btn-success" type='submit'>Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
            <button class="btn btn-danger" onClick={() => handleDelete(item._id)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Form;


// var [value,setValue] = useState('');
//   var changeValue=() =>{
//     setValue('pandago');
//   };
    
//   return(
//     <div className='box'>
//       <h1 >{value}</h1>
//       <button onClick={changeValue}>+</button>
//     </div>
//   );
