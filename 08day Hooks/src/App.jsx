import React from 'react'
import Counter from './Counter.jsx'
import { UserContext } from "./UserContext.jsx";
import './App.css'


function App() {
  return(
    <>
    <UserContext.Provider value= "nihal raza">
      <Counter/>
    </UserContext.Provider>
       </>
  )
}
export default App;