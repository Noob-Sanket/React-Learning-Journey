import { useState } from 'react'
import './App.css'

function App() {

  const [counter , setCounter] = useState(0);
  
  // let counter = 15

  const addValue = () => {
    if (counter < 1000){
    setCounter(counter + 1)
  }
  else {
    setCounter(counter)
  }
   
  }

  const removeValue = () => {
    if (counter > 0){
    setCounter(counter - 1)
    }
    else {
      setCounter(counter)
    }
  }



  return (
    <>
     <h1>React course with Me</h1>
     <h2>Counter Value: {counter}</h2>
     <button
     onClick={addValue}>Add Value</button>{" "}
     <button 
     onClick={removeValue}>Remove Value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
