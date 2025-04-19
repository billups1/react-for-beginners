import Button from "./Button";
import styled from "./App.module.css"
import { useEffect, useState } from "react";
import { func } from "prop-types";

function Hello() {
  function destroyedFn() {
    console.log("destroyed"); // cleanup function
  }
  function effectFn() {
    console.log("created");
    return destroyedFn()
  }
  useEffect(() => {
    effectFn()
  }, [])
  return <h1>hello</h1>
}

function App() {
 const [showing, setShowing] = useState(false)
 const onClick = () => setShowing(prev => !prev)
  return(
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "HIDE" : "Show"}</button>
    </div>
  )
}

export default App;
