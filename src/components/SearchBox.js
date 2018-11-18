import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGifs } from '../store/actions/GifActions';

class SearchBox extends Component {
  state = { word: '' };
  onSubmit = e => {
    e.preventDefault();
    this.props.getGifs(this.state.word);
    this.setState({ word: '' });
  };

  onChange = e => {
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

const mapStateToProps = state => {
  return {
    data: state.giphy.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGifs: word => dispatch(getGifs(word))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
