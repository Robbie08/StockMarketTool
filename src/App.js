import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // loads our bootstrap css
import MainNav from './Components/MainNavigation.js'; // component for main nav bar
import Stock from './Components/Stock.js'; // our stock components

function App() {
  return (
    <div className="App">
      <MainNav></MainNav>
      <Stock></Stock>
    </div>
  );
}

export default App;
