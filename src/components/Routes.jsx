import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Task from '../pages/Task';
import CreateTask from '../pages/CreateTask';
import UpdateTask from '../pages/UpdateTask';



export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Task } />
      <Route exact path="/createtask" component={ CreateTask } />
      <Route exact path="/update/:id" component={ UpdateTask } />
    </Switch>
  );
}
