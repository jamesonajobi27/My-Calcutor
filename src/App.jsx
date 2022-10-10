import './App.css';
import React from "react";
import Digits from './Buttons.jsx' ;
import Operators from './Operators.jsx';
import './Screen2.jsx';
import Screen2 from './Screen2.jsx';



export default function App() {
  
  let [input,setInput] = React.useState(" ");
  let [showDot, setShowDot] = React.useState(true);
  
  function buttonInput(event){

    let num = event.target.value
    setInput( prev =>{
      let Me = prev + num
      return(Me.slice(0, 20))
    })
  }
   
   
 let a
 function OperatorInput(event){
      setShowDot(true)
   let sign =  event.target.value
    setInput( prev => {
             let p = prev.length
            
           if(prev.length === 0){
              return("") 
           }
           else if(prev[p-1] === '.'){
                 a = prev.slice(0,p-1) + sign
                 return(a.slice(0, 20))
           } 
           else if(prev[p-1] === '+'){
             a = prev.slice(0,p-1) + sign
           return(a.slice(0, 20))
             console.log(p)
           }
           else if(prev[p-1] === '-'){
             a = prev.slice(0,p-1) + sign
             return(a.slice(0, 20))
           }
           else if(prev[p-1] === '*'){
             a = prev.slice(0,p-1) + sign
             return(a.slice(0, 20))
           }
          else  if(prev[p-1] === '/'){
              a = prev.slice(0,p-1) + sign
             return(a.slice(0, 20))
           }
          else if(p === 1 ){
             a = ' '
            return (a.slice(0,20))
          }
          else{
            a = prev + sign
            return(a.slice(0, 20))
           }
} )  
 }


  function Dot(event){
       // console.log("90")
    setShowDot(false)
   let sign =  event.target.value
    setInput( prev => {
             let p = prev.length
      if(showDot === true){
        
           if(prev.length === 0){
              return("") 
           }
           else if(prev[p-1] === '.'){
                 a = prev.slice(0,p-1) + sign
                 return(a.slice(0, 20))
           } 
           else if(prev[p-1] === '+'){
             a = prev.slice(0,p-1) + sign
           return(a.slice(0, 20))
             console.log(p)
           }
           else if(prev[p-1] === '-'){
             a = prev.slice(0,p-1) + sign
             return(a.slice(0, 20))
           }
           else if(prev[p-1] === '*'){
             a = prev.slice(0,p-1) + sign
             return(a.slice(0, 20))
           }
          else  if(prev[p-1] === '/'){
              a = prev.slice(0,p-1) + sign
             return(a.slice(0, 20))
           }
          else if(p === 1 ){
             a = ' '
            return (a.slice(0,20))
          }
          else{
            a = prev + sign
            return(a.slice(0, 20))
           }
      }else{
        a = prev 
        return(a.slice(0,20))
      }


      
} )  
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
        setShowDot(true)
      setInput(
        prev => {
             let Me = ['.','+','*','-','/']
             let wrong
              let p = prev.length
          
                if(prev[p-1] === '-'){
                  wrong = true 
                }  
                else if(prev[p-1] === '+'){
                    wrong = true
                } 
                else if(prev[p-1] === '/'){
                    wrong = true
                }     
                else if(prev[p-1] === '.'){
                    wrong = true
                }               
                else if(prev[p-1] === '*'){
                    wrong = true
                }
                else if(prev[p-1] !== '-'){
                  wrong = false
                 }

          
                if(wrong === false){
                b =`${Function("return " + prev)().toFixed(2)}`;
               return b
                 }else{
                  return b = prev
                 }
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
    <Screen2  value={input} />
      <Operators onClick={OperatorInput} />
      <Digits onClick={buttonInput}
        onClick6 ={Dot}
        onClick5={OperatorInput} 
        onClick3={Equal} 
        onClick1={Delete}
        onClick4={AllClear}/>
 </main>
  )
}
