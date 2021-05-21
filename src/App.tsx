import React from 'react';
import './App.css';
import Header from './components/Header';
import Logger from './components/Logger';
import LoggerForm from './components/LoggerForm';

function App() {
  return (
    <div className="">
      <Header text="Finance Logger" />
      <Logger header="Invoice" text="yoshi owes $400 for web design work" />
      <LoggerForm />
    </div>
  );
}

export default App;
