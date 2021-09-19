import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import UserInput from './components/UserInput';
import Routes from './components/Routes';



function App() {
  return (
    <Router>
      <div className="App">
        <UserInput />
      </div>
      <main>
        <Routes />
      </main>
    </Router>
  );
}

export default App;
