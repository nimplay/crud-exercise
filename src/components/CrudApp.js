import React from 'react';
import { useState } from 'react';
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: 'Cella',
    constellation: 'Pegasus',
  },
  {
    id: 2,
    name: 'Shiryu',
    constellation: 'Dragón',
  },
  {
    id: 3,
    name: 'Hyoga',
    constellation: 'Cisne',
  },
  {
    id: 4,
    name: 'Shun',
    constellation: 'Andrómeda',
  },
  {
    id: 5,
    name: 'Ikki',
    constellation: 'Fenix',
  },
]

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [edit, setEdit] = useState(null);

  const addData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  }
  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas seguro de borrar este registro '${id}'?`);
    if(isDelete){
    let newDb = db.filter(item => item.id !== id);
    setDb(newDb);
    } else{
      return;
    }
  }

  const editData = (data) => {
   const newData = db.map(item => item.id === data.id ? data : item);
    setDb(newData);
  }
  return ( 
    <div>
      <h2>Crud App</h2>
      <article className="grid-1-2">
        <CrudForm  
          addData={addData} 
          editData={editData} 
          edit={edit} 
          setEdit={setEdit} 
        />
        <CrudTable 
          data={db} 
          setEdit={setEdit} 
          deleteData={deleteData} 
        />
      </article>
      
    </div>
  );
}
 
export default CrudApp;


