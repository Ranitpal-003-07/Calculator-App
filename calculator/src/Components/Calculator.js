import './Calculator.css';
import {useEffect, useState } from 'react';



const Calculator = () => {
    const [str,setStr]=useState("");
    const [result,setResult]=useState("");

    const inputCheck=()=>{
        if(str.length>25){
            setResult("Too many digits");
        }
    }

    
    const evaluate = () => {
        try {
            let ans = eval(str); 
            setResult(ans);
        } catch (error) {
            setResult(str.slice(0,-1));
        }
    };
    
    const handleOperation = (operator) => {
        evaluate();
        setStr(eval(str).toString() + operator);
    };

    useEffect(()=>{
       inputCheck();
    },[str])
   

   
  return (
    <div className="calculator-grid">
    <div className="output">
      <div className="previous-operand">{str}</div>
      <div className="current-operand">{result}</div>
    </div>
    <button className="span-two" onClick={()=>{setStr(""); setResult("");}}>AC</button>
    <button onClick={()=>{setStr(str.slice(0,-1))}}>DEL</button>
    <button onClick={() => {handleOperation("/")}}>÷</button>
    <button onClick={()=>{setStr(str+"1")}}>1</button> 
    <button onClick={()=>{setStr(str+"2")}}>2</button>
    <button onClick={()=>{setStr(str+"3")}}>3</button>
    <button onClick={() => handleOperation("*")}>x</button> 
    <button onClick={()=>{setStr(str+"4")}}>4</button>
    <button onClick={()=>{setStr(str+"5")}}>5</button>
    <button onClick={()=>{setStr(str+"6")}}>6</button>
    <button onClick={() => handleOperation("+")}>+</button>
    <button onClick={()=>{setStr(str+"7")}}>7</button>
    <button onClick={()=>{setStr(str+"8")}}>8</button>
    <button onClick={()=>{setStr(str+"9")}}>9</button>
    <button onClick={() => handleOperation("-")}>-</button>
    <button  onClick={()=>{setStr(str+".")}}>.</button>
    <button onClick={()=>{setStr(str+"0")}}>0</button>
    <button className="span-two" onClick={evaluate}>=</button>
  </div>
  )
}

export default Calculator
