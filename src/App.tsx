import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Logger from './components/Logger';
import LoggerForm from './components/LoggerForm';
import {LogsProvider, useLogs} from "./store/LoggerStore";
import { log } from './types';
//import { log, store } from './types';

function Main() {
  const [modal, setModal] = React.useState(false);
  const logs = useLogs();
  console.log(logs);

  return (
    <div className="">
      <Header text="Finance Logger" />


      <div className="main">
        <button 
          className="add-button" 
          onClick={() => setModal(true)}
        >ADD LOG</button>

      <div className="logger-container">
        
      {logs.logs.length === 0 ? 
        (
        <div className="logs-placeholder">
          <p>No Logs to show at the moment...</p>
        </div> 
        )
        : (
          
            
              logs && logs.logs.map((log: log, idx: number) => {
                return <Logger 
                        key={idx} 
                        id={log.id}
                        header={log.payment === "Payment" ? "Payment" : "Invoice"}
                        text={`${log.toFrom} ${log.payment === "Payment" ? "is owed" : "owes"} $${log.amount} for ${log.details}`}
                      />
              })
            
          
        )}
        
      </div>

        

      </div>

      <div 
      className={`form-modal ${modal ? "show-modal" :"hide-modal"} `}>
        <button 
          className="close-btn" 
          onClick={() => setModal(false)}>
          X</button>
        <LoggerForm onSubmit={ () => setModal(false) }/>
      </div>

      <Footer />
    </div>
  );
}

const App = () =>{
  return (
    <LogsProvider>
      <Main />
    </LogsProvider>
  )
};

export default App;
