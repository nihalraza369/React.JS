import React, {useState,useEffect,useRef,useContext,useCallback} from "react";
import { UserContext } from "./UserContext.jsx";


function Counter(){
const name = useContext(UserContext)
const [count,setcount]=useState(0);
const prevvalue = useRef(0);

useEffect(() => {
  prevvalue.current = count;
}, [count])

useEffect(() => {
  console.log("Count has changed:", count);
}, [count]);
 const increase = useCallback(() => {
    setcount((prev) => prev + 1);
  }, []);


return(
  <div>
  <h2>👋 Welcome, {name}!</h2>
  <h3>Current Count : {count}</h3>
  <h4>Previous Count: {prevvalue.current ?? "None yet"}</h4>
  <button onClick={increase}>+Increment</button>
  </div>
)
}

export default Counter;