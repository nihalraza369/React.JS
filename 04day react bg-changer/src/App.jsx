import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
  let text = "nihal"

  return (
    
   <div className="h-screen"
    style={{backgroundColor: color }} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div
        className='flex flex-wrap justify-center bg-white gap-3 px-2 py-2 rounded-xl'>
          <button
          onClick={() => setcolor("red",{text})}  
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'red'}}>Click Me</button>
           <button
           onClick={() => setcolor("green")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'green'}}>Click Me</button>
           <button
           onClick={() => setcolor("blue")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'blue'}}>Click Me</button>
            <button
            onClick={() => setcolor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'yellow'}}>Click Me</button>
            <button
            onClick={() => setcolor("purple")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'purple'}}>Click Me</button>
            <button
            onClick={() => setcolor("pink")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'pink'}}>Click Me</button>
            <button
            onClick={() => setcolor("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: 'black'}}>Click Me</button>
            <button
            onClick={() => setcolor("white")} 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'white'}}>Click Me</button>
            <button
            onClick={() => setcolor("olive")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'olive'}}>Click Me</button>
        </div>
      </div>
   </div>
    
  )
}
export default App
