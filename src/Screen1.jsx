import React from "react"


export default function Screen1(prop){
  // let NewMan
  
  //  function Me(){
  //    return(NewMan = eval(prop.value))
  //    console.log(NewMan)
  //  }
  return(
     <input type="text" value={prop.value}  readOnly></input>
  )
} 