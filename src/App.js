import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";

function App() {
  return (
    //npm install react-router-dom 입력 필요
  <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail/>}>
      </Route>
      <Route path="/" element={<Home/>}>
      </Route>
    </Routes>
  </Router>);
}

export default App;
