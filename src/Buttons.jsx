import React from "react"


export default function Digits(props){
    
   return(    
   <div className="NumberButton">       
   <button onClick={props.onClick} value="1">1</button> 
   <button onClick={props.onClick} value="2" >2</button> 
   <button onClick={props.onClick} value="3" >3</button> 
   <button >AC</button>
   <button onClick={props.onClick} value="4">4</button> 
   <button onClick={props.onClick} value="5">5</button> 
   <button onClick={props.onClick} value="6" >6</button>
   <button onClick={props.onClick} value="7" >7</button> 
   <button onClick={props.onClick} value="8">8</button> 
   <button onClick={props.onClick} value="9">9</button> 
   <button onClick={props.onClick} value="0">0</button>  
   <button >=</button> 
      </div>

)
}
