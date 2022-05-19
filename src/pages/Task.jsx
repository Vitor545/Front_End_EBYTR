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
      <div class="container table-responsive">          
      <table class="table">
          <thead>
          <tr>
              <th class="task-id">#</th>
              <th class="task">Tarefa</th>
              <th class="date">Data</th>
              <th class="status">Status</th>
              <th class="update">Editar</th>
              <th class="remove">Remover</th>
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
                <button type="button" class="btn btn-outline-info btn-sm">Editar</button>
              </td>
              <td>
                <button class="btn btn-sm btn-outline-danger" type="button">Remover</button>
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

