import React, { useState } from 'react';
import Header from '../components/Header'
import { useParams, useHistory } from 'react-router-dom';

export default function UpdateTask() {
  const history = useHistory();
  const [taskCreate , setTaskCreate] = useState('Não digitado');
  const [statusCreate , setstatusCreate] = useState('Não digitado');
  const { id } = useParams();
 

  const onChange = ({target}) => {
    setTaskCreate(target.value);
  };

  const onChangeSelect = ({target}) => {
    setstatusCreate(target.value);
  };

  const onClick = () => {
    // CRIA DEPOIS REDIRECIONA
    console.log(id, taskCreate, statusCreate )
    // REDIRECIONE AQUI
    history.push("/");
  };

  const create = () => (
    <div className="task_container">
        <Header /> 
        <div className="task_task">
        <div className="engloba_task">
          <h1>Editar Tarefa</h1>
          <h4>Aqui você pode editar sua tarefa.</h4>
          <div className="containerBig">
            <div className="blocoMaior">
              <div className="bloco">
                <h2>TAREFA</h2>
              </div>
              <input onChange={onChange} type="text" className="input_createTask" placeholder="Digite a tarefa"></input>
            </div>
            <div className="blocoMaior2">
              <div className="bloco">
                <h2>STATUS</h2>
              </div>
              <select onClick={onChangeSelect} name="select" className="select_createTask">
                <option value="andamento">Andamento</option>
                <option value="pendente" selected>Pendente</option>
                <option value="pronto">Pronto</option>
              </select>
            </div>
            <button onClick={onClick} className="btn_create" type="button">Criar</button>
          </div>
        </div>
    </div>
    </div>
  );


  return create() ;
};