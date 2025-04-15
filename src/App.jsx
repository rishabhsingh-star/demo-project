import React, { useState } from "react";
import "./index.css"; // Adjust the path if needed

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>Counter: {count}</h1>
      <div className="button-group">
        <button onClick={() => setCount(count - 1)} className="btn decrement">-</button>
        <button onClick={() => setCount(count + 1)} className="btn increment">+</button>
      </div>
    </div>
  );
}

export default App;
