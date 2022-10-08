import './App.css';
import React from "react";
import Digits from './Buttons.jsx' ;
import Operators from './Operators.jsx';
import Screen1 from './Screen1.jsx';
import './Screen2.jsx';
import Screen2 from './Screen2.jsx';

export default function App() {
  let [input,setInput] = React.useState("")

  function buttonInput(event){
    let num = event.target.value
    setInput( prev =>{
      return(prev + num)
    })
  }
 function OperatorInput(event){
   let sign = event.target.value
    setInput( prev => {
      return(prev + sign)
    })
 }
  function Delete(){
  setInput(prev => {
     let real = prev.length
    return(prev.slice(0,real-1))
  })
  }
  function Equal(){
    return(
      setInput(
        prev =>{
          let b = `${eval(prev)}`
          return(b)
        }
      )
    )
  }

  return (
    <main> 
      <Screen1 value ={input}/>
    <Screen2  value={input}/>
      <Operators onClick={OperatorInput} />
      <Digits onClick={buttonInput} onClick3={Equal} onClick1={Delete}  />
 </main>
  )
}
