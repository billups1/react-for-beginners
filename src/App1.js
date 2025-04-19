import Button from "./Button";
import styled from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time") // 계속 실행됨
  const iRunOnlyOnce = () => {
      console.log('i run only once')
  }
  useEffect(() => {
    console.log('Call the api')
  }, []) // 최초에 한번만 실행됨

  useEffect(() => {
    if(keyword !== "") {
      console.log("search for " + keyword)
    }
  }, [keyword]) // keyword가 변경될 때만 실행되라, keyword를 봐라
  
  useEffect(() => {
    console.log("i run when counter change")
  }, [counter]) // 리액티가 지켜봐야하는 대상 = dependancy

  useEffect(() => {
    console.log("i run when counter/keyword change")
  }, [counter, keyword])

  return (
    <div>
      <div>
      <h1 className={styled.title}>welcome back</h1>
      <Button text={"Continue"} />
      </div>
      <div>
        <input value={keyword} type="text" onChange={onChange} placeholder="Search here"></input>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
      </div>
    </div>
  );
}

export default App;
