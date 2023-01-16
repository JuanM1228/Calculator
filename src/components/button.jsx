import React from "react";
import '../StyleSheets/button.css'
function Button(props){
  const isOperator = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };


  return(
    <div 
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick = {() => props.useClick(props.children)}>
      
      {props.children}
    </div>
  )
}
export default Button 