import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGifs, getTrendingGifs, pauseGifs } from '../store/actions/GifActions';
import './SearchBox.css';

class SearchBox extends Component {
  state = { word: '', pauseText: 'Pause' };

  onTrendingClick = e => {
    this.props.getTrendingGifs();
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.word.length > 0) {
      this.props.getGifs(this.state.word);
      this.setState({ word: '' });
    }
  };

  onPause = e => {
    const text = this.state.pauseText;
    const animating = text === 'Pause' ? true : false;
    this.setState({ pauseText: animating ? 'Play' : 'Pause' });
    this.props.pauseGifs(animating);
  };

  onChange = e => {
    this.setState({ word: e.target.value });
  };

  render() {
    return (
      <div className="mb-5 SearchBox_centered">
        <div className="row">
          <div className="col-5" />
          <div className="col-5">
            <form onSubmit={e => this.onSubmit(e)} className="form-inline">
              <input
                type="text"
                onChange={e => this.onChange(e)}
                value={this.state.word}
                className="mr-2 form-control"
              />
              <button type="submit" className="btn btn-secondary">
                Send
              </button>
              <button className="ml-2 btn btn-primary" onClick={e => this.onTrendingClick(e)}>
                Trending
              </button>
              <button className="ml-2 btn btn-danger" onClick={e => this.onPause(e)}>
                {this.state.pauseText}
              </button>
            </form>
          </div>
        </div>
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
    getGifs: word => dispatch(getGifs(word)),
    getTrendingGifs: () => dispatch(getTrendingGifs()),
    pauseGifs: status => dispatch(pauseGifs(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
