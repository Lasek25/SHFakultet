import React, { useState } from 'react';

function Licznik() {
  const [number, setNumber] = useState(0);
  return (
      <div className="App">
        <button onClick={() => setNumber(number-1)}>-</button>
        {` ${number} `}
        <button onClick={() => setNumber(number+1)}>+</button>
        {number >= 10 && <h1>{`Nie dodawaj już!`}</h1>}
      </div>
  );
}

export default Licznik;