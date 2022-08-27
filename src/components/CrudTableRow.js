import React from 'react';

const CrudTableRow = ({item, setEdit, deleteData}) => {
  let {id, name, constellation} = item;
  return ( 
    <tr>
          <td>{name}</td>
          <td>{constellation}</td>
          <td>
            <button onClick={()=>setEdit(item)}>Editar</button>
            <button onClick={()=>deleteData(id)}>Borrar</button>
          </td>
        </tr>
   );
}
 
export default CrudTableRow;