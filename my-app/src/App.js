import { useState } from "react";
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React Counter</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  );
}
