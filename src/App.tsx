import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Logger from './components/Logger';
import LoggerForm from './components/LoggerForm';

function App() {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="">
      <Header text="Finance Logger" />


      <div className="logger-container">
        <button 
          className="add-button" 
          onClick={() => setModal(true)}
        >ADD LOG</button>

        <Logger 
          header="Invoice" 
          text="yoshi owes $400 for web design work" 
        />
      </div>

      <div 
      className={`form-modal ${modal ? "show-modal" :"hide-modal"} `}>
        <button 
          className="close-btn" 
          onClick={() => setModal(false)}>
          X</button>
        <LoggerForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;
