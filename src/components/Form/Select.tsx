import React, { ChangeEvent } from "react";

export const Select = (props: {optionsArr: string[], placeholder: string, value: string, handleChange: (e: ChangeEvent) => void, name: string}) => {

  const options: React.ReactElement[] = props.optionsArr.map((opt: string, idx: number) => {
    return <option key={idx} value={opt}>{opt}</option>
  })

  return (
    <select 
      name={props.name}
      value={props.value} 
      onChange={(e) => props.handleChange(e)} 
    >

      <option 
        value={props.placeholder}
      >
        {props.placeholder}
      </option>

      {options}
    </select>
  )
}