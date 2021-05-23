
import React, { ReactElement } from "react";
import { log, loggerReducer} from "../types";

const initial_state: log[] = [];

const ctx: any = React.createContext(null);

const Provider: any = ctx.Provider;

export const Consumer: any = ctx.Consumer;

export const reducer: loggerReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOG":
      return [ action.payLoad ,...state];

    case "REMOVE_LOG": {
      const newLogs = state.filter((log) => log.id !== action.payLoad)
      return newLogs;
    }

    case "ADD_LOGS": 
      return action.payLoad;
  
    default:
      return state;
  }
}

export const logsReducerAction: {ADD_LOG: string, ADD_LOGS: string, REMOVE_LOG: string } = Object.freeze({
  ADD_LOG: "ADD_LOG",
  ADD_LOGS: "ADD_LOGS",
  REMOVE_LOG: "REMOVE_LOG"
});


export const LogsProvider = (props: {children: ReactElement}) => {
  const [logs, dispatch] = React.useReducer(reducer, initial_state)
  console.log("logs from logger store:", logs);

  const hydrate: () => void = () => {
    const newLogs: any = localStorage.getItem("logs");

    if (newLogs !== undefined || newLogs !== null) {
      newLogs && dispatch({type: logsReducerAction.ADD_LOGS, payLoad: JSON.parse(newLogs)});
    } else {
      newLogs && dispatch({type: logsReducerAction.ADD_LOGS, payLoad: []});
    }
  }

  const deHydrate: () => void = () => {
    if (logs) {
      localStorage.setItem("logs", JSON.stringify(logs));
    }
  }

  React.useEffect( ()=> {
    hydrate();
  }, [])

  React.useEffect( ()=> {
    deHydrate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logs])

  return (
    <Provider value={{logs, dispatch}}>
      {props.children}
    </Provider>
  )
}

/* export const useLogs = () => {
  return React.useContext<log[]>(ctx);
} */

export const useLogs: () => {logs: log[], dispatch: (action: {type: string, payLoad: any}) => void} = () => {
  return React.useContext(ctx);
}