import React from 'react';
import Form from '../components/Form';
import Lista from '../components/List';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Lista />
    </div>
  );
}

export default App;