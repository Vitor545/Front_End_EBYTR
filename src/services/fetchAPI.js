import axios from 'axios';

export const getTask = async () => {
  const getTasks = `http://localhost:5000/task`;
  const response = await fetch(getTasks);
  const userTask = await response.json();
  return userTask;
};

export const createTask = (tarefa, data, status) => {
   axios.post(`http://localhost:5000/task`, {
    tarefa: `${tarefa}`,
    data: `${data}`,
    status: `${status}`
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};


export const updateTask = async (tarefa, status, id) => {
    await axios.put(`http://localhost:5000/task/${id}`, {
      tarefa: `${tarefa}`,
      status: `${status}`
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};


export const deleteTask = async (id) => {
  await axios.delete(`http://localhost:5000/task/${id}`);
};
