import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <Counter initialCount = {0} />
    );
  }
}

export default App;
