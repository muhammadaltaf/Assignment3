import React, {useState} from 'react';

import './App.css';

function App() {

  const [isOn, setOn] = useState(false);
  let [temp, setTemp] = useState(22);
  const on = isOn ? 'On': 'Off';

  return (
    <div className={`App ${on}`}>
      <button onClick={() => setOn(!isOn)}>{on}</button>
      <h2>Temperature in Celsius {temp}</h2>
      <button onClick={() => setTemp(++temp)}>+</button>
      <button onClick={() => setTemp(--temp)}>-</button>
    </div>
  );
}

export default App;
