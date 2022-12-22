import {useState} from 'react';

import { sendData } from "../socketApi";

function Palette({background}) {

  const [color, setColor] = useState('#919191');

  return (
    <div className='palette'>
        <input className='color-input'
          type="color"
          value={background}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={() => sendData(color)}>Change Background</button>
    </div>
  )
}

export default Palette