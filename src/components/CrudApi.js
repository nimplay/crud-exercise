import React, { useEffect } from 'react';
import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loaders from './Loaders';
import Message from './Message';

const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [edit, setEdit] = useState(null);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {

    api.get(url).then(res => {
      if(!res.err){setDb(res)
      }else{
        setDb([]);
      }
      });
  },[])

  

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
      <h2>Crud Api</h2>
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
      <Loaders/> <Message/>
    </div>
  );
}
 
export default CrudApi;