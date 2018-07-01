import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Journey from './Journey'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dakar</h1>
        </header>
        <h1>Journey display</h1>
        <Journey destination="Afghanistan" price="500"/>
      </div>
    );
  }
}


export default App;
