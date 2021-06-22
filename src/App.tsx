import React, { useState, useCallback } from 'react';
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
        <h1>Super Calculadora Sumadora &quot;Dora&quot;</h1>
        <div>
          <label htmlFor="numA">Numero A: </label>
          <input
            id="numA"
            value={numA}
            style={{ fontSize: 24, width: 100, textAlign: 'center' }}
            onChange={(e) => setNumA(+e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numB">Numero B: </label>
          <input
            id="numB"
            value={numB}
            style={{ fontSize: 24, width: 100, textAlign: 'center' }}
            onChange={(e) => setNumB(+e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            style={{ fontSize: 24, margin: '40px 0' }}
            onClick={calcularResultado}
          >
            Sumar
          </button>
        </div>
        <div>
          <label htmlFor="total">Resultado: </label>
          <input
            id="total"
            value={total}
            style={{
              fontSize: 24,
              width: 100,
              textAlign: 'center',
              backgroundColor: 'white',
            }}
            disabled
            readOnly
          />
        </div>
      </header>
    </div>
  );
}

export default App;
