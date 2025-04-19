import Button from "./Button";
import styled from "./App.module.css"
import { useEffect, useState } from "react";
import { func } from "prop-types";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); 
  const onChange = (event) => {
    setCount(event.target.value / 20);
  }
  const [count, setCount] = useState(0); 
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  }, [])
  return(
    <div>
      <h1>the coin ({coins.length})</h1>
      {
        loading ? <strong>Loading...</strong> :       
        <select onChange={onChange}>
          {coins.map((coin, index) => <option value={coin.quotes.USD.price} key={index}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
        </select>
      }
      <span>{count}개</span>

    </div>
  )
}

export default App;
