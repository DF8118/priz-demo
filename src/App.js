import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputTest from './InputTest';
import store from './store/index';

function App() {
  return (
    <div className="App">
      <InputTest store={store}/>
    </div>
  );
}

export default App;
