import React from "react";

const Logger = (props: {header: string, text: string}) => {
  return (
    <div className="logger">
      <div>
        <p>{props.header}</p>
        <p>{props.text}</p>
      </div>
      <button className="">X</button>
    </div>
  )
}

export default Logger;