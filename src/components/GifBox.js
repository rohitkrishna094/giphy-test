import React, { Component } from 'react';
import Card from '../containers/Card';
import { connect } from 'react-redux';
import { getGifs } from '../store/actions/GifActions';
import './GifBox.css';

class GifBox extends Component {
  state = { data: [] };

  componentDidMount() {
    this.props.getGifs('cricket');
  }

  render() {
    return (
      <div className="GifBox_scrolbar">
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
