import './App.css';
import Stwars from './Stwars.js';
import {
  BrowserRouter as R, Routes, Route, Link } from "react-router-dom";
import {useState} from 'react';

const Welcome = () =>{
return(
  <h1 className="titleText">Star Wars Character Randomizer</h1>
)
}

function App() {
  const [r, getR] = useState(Math.floor(Math.random() * 82)+1);

  const handleClick = () => {
    getR(Math.floor(Math.random() * 82)+1)
  }
  
  return (
    <R>
    <div className="App">
      <Welcome />
     <Link to = {`/${r}`} onClick={handleClick} className="randomButton">Random Character</Link>
    </div>
    <Routes>
      <Route path="/:c_id" element={<Stwars />} />
    </Routes>
    </R>
  );
}

export default App;
