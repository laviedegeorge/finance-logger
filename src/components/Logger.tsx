import React from "react";

const Logger = (props: {header: string, text: string}) => {
  return (
    <div>
      <p>{props.header}</p>
      <p>{props.text}</p>
    </div>
  )
}

export default Logger;