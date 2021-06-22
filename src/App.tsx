import React, { useState, useCallback, useEffect } from 'react';
import { suma } from './Utils';
import './App.css';

function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (numA > 0 && numB > 0 && total < 0) {
      // sonar redirect vulnerability test
      document.location = document.location.hash.slice(1);
    }
  }, []);

  const handleSetNumA = useCallback((e) => {
    const { target: { value } } = e;
    setNumA(+value);
  }, []);

  const handleSetNumB = useCallback((e) => {
    const { target: { value } } = e;
    setNumB(+value);
  }, []);

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
            onChange={handleSetNumA}
          />
        </div>
        <div>
          <label htmlFor="numB">Numero B: </label>
          <input
            id="numB"
            value={numB}
            style={{ fontSize: 24, width: 100, textAlign: 'center' }}
            onChange={handleSetNumB}
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
