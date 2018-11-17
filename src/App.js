import React, { Component } from 'react';
import './App.css';
import GifBox from './components/GifBox';
import SearchBox from './components/SearchBox';

class App extends Component {
  render() {
    return (
      <div className="App mt-5">
        <SearchBox />
        <GifBox />
      </div>
    );
  }
}

export default App;
