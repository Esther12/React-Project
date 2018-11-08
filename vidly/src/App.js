import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './component/movies';

class App extends Component {
  render() {
    return (
      <main className="container">
      <h1>Hello World</h1>
      <Movies />
      </main>
    );
  }
}

export default App;
