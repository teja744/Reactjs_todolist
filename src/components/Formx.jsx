import React, { useState ,useEffect} from 'react';

function Form() {

  const [formData,setFormData] = useState({name:'', checked:false});
  const [namesList,setNamesList] = useState([]);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const data = localStorage.getItem('namesList');
    if (data) {
      setNamesList(JSON.parse(data));
    }
  }, []);

  // Save data to localStorage whenever namesList changes
  useEffect(() => {
    localStorage.setItem('namesList', JSON.stringify(namesList));
  }, [namesList]);

  const handleFormChange =event =>{
    setFormData({
      ...formData,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    }
    );
  };

  const handleSubmit = event =>{
    event.preventDefault();
    if (formData.name !== '') {
      setNamesList([...namesList,formData]);
      setFormData({name:'', checked:false});
    }
    console.log(formData.name);
  };

  const handleDelete = index => {
    setNamesList(namesList.filter((name, i) => i !== index));
  };


  return(
    <div className='box'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleFormChange} autoComplete='off' />
        <button type='submit'>+</button>

      </form>
      <ul>
        {namesList.map((name, index) => (
          <li key={index}>
            <input type='checkbox' checked={name.checked} onChange={() => handleDelete(index)} />
            {name.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;