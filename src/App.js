import React from 'react';
import './App.css';
import MaintenanceItems from './MaintenanceItems';
import logo from './img/aysp_logo.png'; // Replace with actual path to logo

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex align-items-center justify-content-center">
        <img src={logo} alt="At Your Service Pros" className="logo" />
        <h2 className="ms-3">At Your Service Pros </h2><h5>(Approved Products)</h5>
      </header>
      <main>
        <MaintenanceItems />
      </main>
    </div>
  );
}

export default App;
