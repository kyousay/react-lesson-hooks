import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setcount] = useState(0);
  const [message, setMessage] = useState('initial')
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setcount(count + 1)}>countUp</button>
      <button onClick={() => setcount(count - 1)}>countDown</button>

      <div>
      <h2>{message}</h2>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
    </>
  );
}

export default App;
