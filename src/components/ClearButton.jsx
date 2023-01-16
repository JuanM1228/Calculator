import React from "react";
import '../StyleSheets/ClearButton.css'

const ClearButton = (props) => {
  return(
    <div 
    className="button-clear"
    onClick={props.useClick}>
      {props.children}
    </div>
  )
}

export default ClearButton;