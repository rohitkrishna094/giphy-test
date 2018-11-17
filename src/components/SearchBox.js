import React, { Component } from 'react';

export default class SearchBox extends Component {
  state = { word: '' };
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
      <div className="mb-5">
        <form onSubmit={e => this.onSubmit(e)}>
          <input type="text" onChange={e => this.onChange(e)} value={this.state.word} />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
