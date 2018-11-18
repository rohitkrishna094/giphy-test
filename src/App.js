import React, { Component } from 'react';
import './App.css';
import GifBox from './components/GifBox';
import SearchBox from './components/SearchBox';
import History from './components/History';

class App extends Component {
  render() {
    return (
      <div className="App mt-5">
        <SearchBox />
        <div className="container-fluid">
          <div className="row ">
            <div className="col-2">
              <History />
            </div>
            <div className="col-10">
              <GifBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
