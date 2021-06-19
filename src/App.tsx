import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import { suma } from './Utils';
import './App.css';

function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [total, setTotal] = useState(0);

  const calcularResultado = useCallback(() => {
    setTotal(suma(numA, numB));
  }, [numA, numB]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Calculadora Sumadora "Dora"</h1>
        <div>
          <label>Numero A: </label>
          <input
            value={numA}
            style={{fontSize: 24, width: 100, textAlign: 'center'}}
            onChange={(e) => setNumA(+e.target.value)}
          />
        </div>
        <div>
          <label>Numero B: </label>
          <input
            value={numB}
            style={{fontSize: 24, width: 100, textAlign: 'center'}}
            onChange={(e) => setNumB(+e.target.value)}
          />
        </div>
        <div>
          <button
            style={{fontSize: 24, margin: '40px 0'}}
            onClick={calcularResultado}
          >
            Sumar
          </button>
        </div>
        <div>
          <label>Resultado: </label>
          <input
            value={total}
            style={{fontSize: 24, width: 100, textAlign: 'center'}}
            disabled
            readOnly
          />
        </div>
      </header>
    </div>
  );
}

export default App;
