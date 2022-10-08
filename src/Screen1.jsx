import React from "react"


export default function Screen1(prop){
       // console.log(eval(prop.value))
  return(
     <input type="text" value={prop.value}  readOnly></input>
  )
} 
 
  // setTotal(
  //       prev => {
  //          b = `${eval(prev)}`
  //              return(b)
  //       })