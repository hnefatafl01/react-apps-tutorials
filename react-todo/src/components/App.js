import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from './List';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
