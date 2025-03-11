import React from 'react';
import "./App.css"
import { useState } from 'react';
const App = () => {
const [count , setCount] = useState(0)
  return (
    <div className='btn-div'>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;
