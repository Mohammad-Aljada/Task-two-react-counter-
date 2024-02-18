import { useState } from 'react';
import './App.css'

function App() {
  let [count , setCounter] = useState(0);
function IncreaseCounter(){
  setCounter(count+1)
  
}
  return (
    <>
    <div className="count">
      <button onClick={IncreaseCounter}>Mohammad aljada</button>
      <p>count  is :{count}</p>
    </div>
    </>
  )
}

export default App
