import React, { useEffect, useState } from 'react';
import { getTask } from '../services/fetchAPI';

export default function Task () {

  const [task , setTask] = useState([]);

  const requestAPI = async () => {
    const tasks = await getTask();
    setTask(tasks);
  };

  useEffect(async () => {
    requestAPI();
  },[]);


  const onClick = (id) => {
    const test = task.filter((obj) => obj.id !== id);
    setTask(test);
  };


  return (
    <div className="task_container">
      {console.log(task)}

      <header>
        <div className="nav_task">
          <h1>EBYTR</h1>
          <button className="btn_header">Criar Tarefa</button>
        </div>
      </header>

    <div className="task_task">
      <div className="engloba_task">
      <h1>Tarefas</h1>
      <h4>Gerencie suas tarefas aqui.</h4>
      <div className="container table-responsive">          
      <table className="table">
          <thead>
          <tr>
              <th className="task-id">#</th>
              <th className="task">Tarefa</th>
              <th className="date">Data</th>
              <th className="status">Status</th>
              <th className="update">Editar</th>
              <th className="remove">Remover</th>
          </tr>
          </thead>

          <tbody>

            {task.map((obj)=> (
              <tr>
              <td>{obj.id}</td>
              <td>{obj.tarefa}</td>
              <td>{obj.data}</td>
              <td>{obj.status}</td>
              <td>
                <button type="button" className="btn btn-outline-info btn-sm">Editar</button>
              </td>
              <td>
                <button onClick={() => onClick(obj.id)} className="btn btn-sm btn-outline-danger" type="button">Remover</button>
              </td>
          </tr>
            ))}
          </tbody>
      </table>
    </div>

      </div>
    </div>
    </div>
  );
}

