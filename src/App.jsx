import './App.css'
import Input from './components/Input'
import Output from './components/Output'
import Buttons from './components/Buttons'
import { useState } from 'react'


function App() {

  let [ output, setOutput]  =  useState(0);
  let [ input, setInput]  =  useState(0);

  function clickEventHandling(value) {
    if( value == 'C'){
      setInput('');
      setOutput(0);
    } 
    else if( value == 'Back'){
      let newInput = input.toString().slice(0, -1);
      setInput(newInput);
    } 
    else if( value == 'Clear All'){
      setInput('');
      setOutput(0);
    } 
    else if( value == '='){
      try {
        let result = eval(input); //calculate the result
        setOutput(result);
      } catch (error) {
        setOutput('Error');
      }
    } 
    else {
      let newInput = input === 0 ? value : input.toString() + value;
      setInput(newInput);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-300'>
      <div className='calculator-frame p-4 bg-gray-200 rounded-lg shadow-lg'>
         <Output output= {output} />
         <Input input= {input} />
         <Buttons clickEventHandling = {clickEventHandling} />
      </div>
    </div>
  )
}

export default App
