import React from "react";

export default function Operators(props){
  return(
  <div>
    <button className="sign" onClick={props.onClick} value="+">+</button>
    <button className="sign" onClick={props.onClick} value="-">-</button>
    <button className="sign" onClick={props.onClick} value="/">/</button>
    <button className="sign" value="*"   onClick={props.onClick}>*</button>
  </div>
  )
}