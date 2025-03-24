import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(""); 
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <h1>Welcome to Student Dashboard</h1>

      <input 
        type="text" 
        placeholder="Enter your name"
        className="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>HELLO , {name}</p>

      <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to light-Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
