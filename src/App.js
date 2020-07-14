import React, { useState } from 'react';
import './App.css';

import Counter from './components/Counter.js';
import Result from './components/Result.js';
import { CounterProvider } from './components/useCounter';
function App() {
  const [step, setStep] = useState(1);
  function nextStep() {
    setStep(step + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CounterProvider>
          { step === 1 && <Counter nextStep={nextStep}/> }
          { step === 2 && <Result /> }
        </CounterProvider>
      </header>
    </div>
  );
}

export default App;
