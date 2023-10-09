import React, {useState} from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../types/ITask';

function App() {

  const [tasks, setTasks] = useState <ITask[]> ([]);

  const [selected, setSelected] = useState <ITask> ();

  function selectTask (selectedTask: ITask) {
    setSelected(selectedTask);
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks = {setTasks}/>
      <List 
      tasks = {tasks}
      selectTask = {selectTask}
      />
      <Stopwatch />
    </div>
  );
}

export default App;