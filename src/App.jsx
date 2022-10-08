import './App.css';
import React from "react";
import Digits from './Buttons.jsx' ;
import Operators from './Operators.jsx';
import Screen1 from './Screen1.jsx';
import './Screen2.jsx';
import Screen2 from './Screen2.jsx';

export default function App() {
  let [input,setInput] = React.useState("")

   function inputValue(event){
     setInput(event.target.value);
  }
  
  function buttonInput(event){
    let num = event.target.value
    setInput( prev =>{
      return(prev + num)
    })
  }
 function OperatorInput(event){
   let sign = event.target.value
   console.log(sign)
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

  return (
    <main> 
      <Screen1 value ={input}/>
    <Screen2 onChange={inputValue} value={input}/>
      <Operators onClick={OperatorInput} />
      <Digits onClick={buttonInput} onClick1={Delete}  />
 </main>
  )
}
