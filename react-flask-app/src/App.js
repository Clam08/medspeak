import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to medspeak
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=ub82Xb1C8os"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </header>
    </div>
  );
}

export default App;
