import './App.css';
import React from "react";
import Digits from './Buttons.jsx' ;
import Operators from './Operators.jsx';
import Screen1 from './Screen1.jsx';
import './Screen2.jsx';
import Screen2 from './Screen2.jsx';

export default function App() {
   let [input2,setInput2] = React.useState("")
  
  let [input,setInput] = React.useState(input2)

   function inputValue(event){
     setInput(event.target.value);
   console.log(event.target.value);
  }
  function buttonInput(event){
    let num = event.target.value
    setInput2( prev =>{
      return(prev + num)
    })
    
    console.log(input2)
  }




  
  return (
    <main> 
      <Screen1 value ={input}/>
      <Screen2 onChange={inputValue}/>
      <Operators />
      <Digits onClick={buttonInput}  />
 </main>
  )
}
