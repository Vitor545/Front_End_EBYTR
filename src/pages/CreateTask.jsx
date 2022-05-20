import React, { useState } from 'react';
import Header from '../components/Header'
import { NavLink } from 'react-router-dom';
import { createTask } from '../services/fetchAPI';

const dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
const monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")

export default function CreateTask() {
  const [taskCreate , setTaskCreate] = useState('Não digitado');
  const [statusCreate , setstatusCreate] = useState('Não digitado');

  const onChange = ({target}) => {
    setTaskCreate(target.value);
  };

  const onChangeSelect = ({target}) => {
    setstatusCreate(target.value);
  };

  const onClick = async () => {
    const now = new Date
    const dates  = dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear ()
    await createTask(taskCreate, dates, statusCreate);
  };

  const create = () => (
    <div className="task_container">
        <Header /> 
        <div className="task_task">
        <div className="engloba_task">
          <h1>Criar Tarefa</h1>
          <h4>Aqui você pode criar as tarefas.</h4>
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
            <NavLink to="/"exact >
              <button onClick={onClick} className="btn_create" type="button">Criar</button>
            </NavLink>
          </div>
        </div>
    </div>
    </div>
  );


  return create() ;
};