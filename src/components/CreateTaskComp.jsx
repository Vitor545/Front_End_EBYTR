import React from 'react';

export default function CreateTaskComp({task, onClick}) {

  return(
    <tbody>
    {task.map((obj)=> (
      <tr>
      <td>{obj.id}</td>
      <td>{obj.tarefa}</td>
      <td>{obj.data}</td>
      <td>{obj.status}</td>
      <td>
        <a href={`/update/${obj.id}`} className="btn btn-outline-info btn-sm">Editar</a>
      </td>
      <td>
        <button onClick={() => onClick(obj.id)} className="btn btn-sm btn-outline-danger" type="button">Remover</button>
      </td>
  </tr>
    ))}
  </tbody>
  );

}