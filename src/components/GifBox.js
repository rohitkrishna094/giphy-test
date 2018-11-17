import React, { Component } from 'react';
import Card from '../containers/Card';
import { connect } from 'react-redux';
import { getGifs } from '../store/actions/GifActions';

class GifBox extends Component {
  state = { data: [] };

  componentDidMount() {
    this.props.getGifs('cricket');
  }

  render() {
    return (
      <div className="App_scrollbar container">
        {this.props.data.map(e => (
          <Card entry={e} key={e.id} />
        ))}
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
)(GifBox);
