import React, { ChangeEvent } from "react";

import { Input } from "./Form/Input";
import { Select } from "./Form/Select";
import { useLogs, logsReducerAction } from "../store/LoggerStore";


const LoggerForm = (props: {onSubmit: () => void}) => {
  const { dispatch } = useLogs();
  const { ADD_LOG } = logsReducerAction;
  const [state, setState] = React.useState({
    payment: "",
    toFrom: "",
    details: "",
    amount: ""
  })

  const onChange = (e: ChangeEvent ) => {
    e.preventDefault();
    const target = e.target as any;

    switch (target.name) {
      case "payment":
        return setState({...state, payment: target.value});
  
      case "toFrom":
         return setState({...state, toFrom: target.value});

      case "details":
        return setState({...state, details: target.value});

      case "amount":
        return setState({...state, amount: target.value});

    
      default:
        break;
    }
  }

  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      setState({
        payment: "",
        toFrom: "",
        details: "",
        amount: ""
      })
    } }>
      <Select 
        name="payment"
        value={state.payment} 
        optionsArr={["Payment", "Invoice"]} 
        placeholder="--- Type of payment ---"
        handleChange={(e) => onChange(e)} 
      />

      <Input 
        type="text" 
        name="toFrom" 
        value={state.toFrom} 
        placeholder="To/From" 
        handleChange={(e) => onChange(e)} 
      />

      <Input 
        type="text" 
        name="details" 
        value={state.details} 
        placeholder="Details" 
        handleChange={(e) => onChange(e)} 
      />

      <Input 
        type="number" 
        name="amount" 
        value={state.amount} 
        placeholder="Amount" 
        handleChange={(e) => onChange(e)} 
      />

      <button className="add-button" onClick={() =>{
        const log = {id: Symbol(), ...state}
        dispatch({type: ADD_LOG, payLoad: log});
        props.onSubmit();
      }}>
        ADD
      </button>
    </form>
  )
}

export default LoggerForm;