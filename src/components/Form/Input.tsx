import React from "react";
import { textInputAliases } from "../../aliases/FormAliases";

export const Input = (props: textInputAliases) => {

  return (
    <input 
      type={props.type} 
      name={props.name} 
      {...props as any } 
      value={props.value}
      placeholder={props.placeholder} 
      onChange={(e) => props.handleChange(e)} 
    />
  )
}