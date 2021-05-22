import React from "react";
import { logsReducerAction, useLogs } from "../store/LoggerStore";

const Logger = (props: {id: Symbol, header: string, text: string}) => {
  const { dispatch } = useLogs();
  const {REMOVE_LOG} = logsReducerAction;
  return (
    <div className="logger">
      <div>
        <p>{props.header}</p>
        <p>{props.text}</p>
      </div>
      <button className="" onClick={() => dispatch({type: REMOVE_LOG, payLoad: props.id}) }>X</button>
    </div>
  )
}

export default Logger;