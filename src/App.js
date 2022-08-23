import React, { Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
          </Routes>
      </div>
    );
  }
}

export default App;
