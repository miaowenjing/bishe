import React from 'react';
import {Route ,Link} from 'react-router-dom'
import logo from './logo.svg';
import Header from './components/head'
import CostumeRental from './pages/costumeRental'
import './App.css';

function App() {
  return (
    <div className="App">
    <CostumeRental/>
  {/* <Header/> */}
    </div>
  );
}

export default App;
