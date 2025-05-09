import Button from "./Button";
import styled from "./App.module.css"
import { useEffect, useState } from "react";
import { func } from "prop-types";

function App() {
 const [toDo, setToDo] = useState("")
 const [toDos, setToDos] = useState([])
 const onChange = (event) => {
  setToDo(event.target.value)
  console.log(toDo)
 }
 const onSubmit = (event) => {
  event.preventDefault();
  if (toDo === "") {
    return;
  } 
  setToDos(currentArray => [toDo, ...currentArray]);
  
  setToDo("");
 }
 console.log(toDos)
  return(
    <div>
      <h1>my to dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="write your to do"/>
      <button >Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App;
