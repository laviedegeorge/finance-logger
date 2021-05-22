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
  
    default:
      return state;
  }
}

export const logsReducerAction: {ADD_LOG: string, REMOVE_LOG: string } = Object.freeze({
  ADD_LOG: "ADD_LOG",
  REMOVE_LOG: "REMOVE_LOG"
});


export const LogsProvider = (props: {children: ReactElement}) => {
  const [logs, dispatch] = React.useReducer(reducer, initial_state)
  console.log("logs from logger store:", logs)
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