import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)


  let addvalue = () => {
    let newCount = count + 1
    setCount(newCount)
 
  }
  let removevalue=()=>{
    let newrecount=count-1
    setCount(newrecount)
  }

  return (
    <>
      <h1>nihal aur code{count}</h1>
      <p>number:</p>
      <button
      onClick={addvalue}>add{count}</button>
      <br />
      <button
      onClick={removevalue}>remove{count}</button>
      <p>footer{count}</p>
    </>
  )
}

export default App



//NOTE: This is the code without useState
/*
let count = 0
let addvalue = () => {
  count = count + 1
  console.log(count)
}
let removevalue=()=>{
  count = count - 1
  console.log(count)
}
  return (
    <>
      <h1>nihal aur code</h1>
      <p>number:{count}</p>
      <button
      onClick={addvalue}>add{count}</button>
      <br />
      <button
      onClick={removevalue}>remove{count}</button>
      <p>footer{count}</p>
    </>
  )

}

export default App
*/