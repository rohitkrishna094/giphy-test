import React, { Component } from 'react';
import Card from './Card';
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
        {this.props.data.map(e => {
          const image = this.props.pause ? e.images.fixed_height_still.url : e.images.fixed_height.url;
          const object = { image, title: e.titl };
          return <Card entry={object} key={e.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.giphy.data,
    pause: state.giphy.pause
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
