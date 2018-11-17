import React, { Component } from 'react';
import './App.css';
import GifBox from './components/GifBox';
import SearchBox from './components/SearchBox';
import Navbar from './containers/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBox />
        <GifBox />
      </div>
    );
  }
}

export default App;
