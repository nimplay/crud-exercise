import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable  = ({data, setEdit, deleteData}) => {
  return (  
    <div>
    <h3>Tabla de datos</h3>
    <table>
      <thead>
        <th>Nombre</th>
        <th>Constelación</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        {data.lenght === 0 ? 
        <tr>
          <td colSpan="3">Sin datos</td> 
          </tr>: data.map((item) => 
          <CrudTableRow 
          key={item.id} 
          item={item} 
          setEdit={setEdit} 
          deleteData={deleteData} 
          />
          )}
       </tbody>
      
    </table>
    </div>
  );
}
 
export default CrudTable;


