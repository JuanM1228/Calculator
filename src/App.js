import freeCodeCampLogo from './images/fcc_primary_large.png'
import './App.css';
import Button from './components/button.jsx'
import Input from './components/input.jsx'
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value)
  }

  const operation = () => {
    if (input) {
      setInput(evaluate(input))
    }
    else {
      alert("Por favor ingrese valores para realizar el cálculo")
    }

  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freeCodeCamp Logo' />
      </div>

      <div className='calculator-container'>
        <Input input={input} />
        <div className='row'>
          <Button useClick={addInput}>1</Button>
          <Button useClick={addInput}>2</Button>
          <Button useClick={addInput}>3</Button>
          <Button useClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button useClick={addInput}>4</Button>
          <Button useClick={addInput}>5</Button>
          <Button useClick={addInput}>6</Button>
          <Button useClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button useClick={addInput}>7</Button>
          <Button useClick={addInput}>8</Button>
          <Button useClick={addInput}>9</Button>
          <Button useClick={addInput}>*</Button>

        </div>
        <div className='row'>
          <Button useClick={operation}> =</Button>
          <Button useClick={addInput}>0</Button>
          <Button useClick={addInput}>.</Button>
          <Button useClick={addInput}>/</Button>

        </div>
        <div className='row'>
          <ClearButton useClick={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
