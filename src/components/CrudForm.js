import React, { useState, useEffect } from 'react';

const initialForm = {
  id: null,
  name: '',
  constellation: '',
}

const CrudForm = ({addData, editData, edit,setEdit}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (edit) {
      setForm(edit);
    } else {
      setForm(initialForm);
    }
  }, [edit])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.constellation) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (form.id === null) {
      addData(form);
    }else {
      editData(form);
    }
    handleReset();
  }

  const handleReset = (e) => {
    setForm(initialForm);
    setEdit(null);
  }

  return ( 
    <div>
      <h3>{edit ? "Editar":"Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={form.name}/>
        <input type="text" name="constellation" placeholder="Constellation" onChange={handleChange} value={form.constellation}/>
        <input type="submit" value="Add/Edit"/>
        <input type="reset" value="Clean" onClick={handleReset}/>
      </form>
    </div>
  );
}
 
export default CrudForm;