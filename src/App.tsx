import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter'
import TopBar from './components/TopBar';


class App extends Component {
  render() {
    return (
      <>
        <Counter initialCount={0} />
        <TopBar />
      </>
    );
  }
}

export default App;
