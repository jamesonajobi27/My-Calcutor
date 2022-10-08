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
    let limit = 10
    let num = event.target.value.slice(0, limit)
    setInput( prev =>{
      return(prev + num)
    })
  }
 function OperatorInput(event){
   const limit = 10
   let sign =  event.target.value.slice(0, limit)
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
  let b 
   let p
  function Equal(){
    
      setInput(
        prev => {
           b =`${Function("return " + prev)()}`;
           return (b)
        }
    
      )
  } 

  function AllClear(){
    setInput(prev => {
     let real = prev.length
    return(prev.slice(real))
  })
  }
  
  return (
    <main> 
    <Screen2  value={input}/>
      <Operators onClick={OperatorInput} />
      <Digits onClick={buttonInput}
        onClick3={Equal} 
        onClick1={Delete}
        onClick4={AllClear}/>
 </main>
  )
}
