import React, { Component } from 'react';
import { GIPHY_API_KEY } from './config/keys';
import { GIPHY_BASEURL } from './config/urls';
import './App.css';
import Card from './containers/Card';

class App extends Component {
  state = { data: [], word: '' };
  componentDidMount() {
    this.run('cricket');
  }

  run = word => {
    const url = `${GIPHY_BASEURL}/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${word}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        this.setState({ data: data.data });
      });
  };

  onSubmit = e => {
    e.preventDefault();
    this.run(this.state.word);
    console.log(this.state.word);
  };

  onChange = e => {
    // console.log('changed');
    this.setState({ word: e.target.value });
  };

  render() {
    return (
      <div className="App mt-5">
        <div className="mb-5">
          <form onSubmit={e => this.onSubmit(e)}>
            <input type="text" onChange={e => this.onChange(e)} value={this.state.word} />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="App_scrollbar container">
          {this.state.data.map(entry => (
            <Card entry={entry} key={entry.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
