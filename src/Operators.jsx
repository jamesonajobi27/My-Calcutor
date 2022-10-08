import React from "react";

export default function Operators(props){
  return(
  <div>
    <button onClick={props.onClick} value="+">+</button>
    <button onClick={props.onClick} value="-">-</button>
    <button onClick={props.onClick} value="/">/</button>
    <button value="*"   onClick={props.onClick}>*</button>
  </div>
  )
}