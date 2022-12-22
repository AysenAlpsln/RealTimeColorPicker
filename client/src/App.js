import './App.css';
import {useEffect, useState} from 'react'
import { init, subscribe } from "./socketApi";
import Palette from './components/Palette';

function App() {
  const [background, setBackground] = useState('#fff')

  useEffect(() => {
    init();
    subscribe((color) => {
      setBackground(color);
    });
  },[]);

  return (
    <div className="App" style={{backgroundColor: background}} >
      <Palette background={background} />
    </div>
  );
}

export default App;
