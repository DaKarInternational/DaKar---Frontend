// Be sure to import axios
import React, { Component } from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'

// CSS
import './App.css';

class App extends Component {

  // Render the Application
  render() {

    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
