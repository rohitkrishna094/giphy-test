import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewLink } from '../store/actions/HistoryAction';
import './History.css';
import { getGifs } from '../store/actions/GifActions';

class History extends Component {
  onClick = e => {
    console.log(e.target.innerHTML);
    this.props.getGifs(e.target.innerHTML);
  };

  render() {
    return (
      <div>
        <h3>History</h3>
        {this.props.links.map(link => (
          <React.Fragment key={Math.random()}>
            <span className="History_cursor" onClick={e => this.onClick(e)}>
              {link.text}
            </span>
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    links: state.history.links
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewLink: link => dispatch(addNewLink(link)),
    getGifs: word => dispatch(getGifs(word))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
