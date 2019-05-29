import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import Button from './components/button';
import './App.css';


const App = () => {
  const [numberState, numberSetState] = useState(0);

  const addNumber = () => {
    numberSetState(numberState + 1);
  }

  const subtractNumber = () => {
    numberSetState(numberState - 1 );
  }

  useEffect(() => {
    document.title = `${ numberState }`
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex-container">
          <Button buttonText={`Add numbers`} onPress={addNumber} />
          {numberState > 0 &&
            <Button buttonText={`Minus numbers ${numberState}`} onPress={subtractNumber} />
          }
        </div>
        <p>The state of the number is: { numberState }</p>
      </header>
    </div>
  );
}

export default App;
