import React, { Component } from 'react';
import { connect } from 'react-redux';
import './History.css';
import { getGifs } from '../store/actions/GifActions';
import { deleteWord } from '../store/actions/HistoryAction';

class History extends Component {
  onClick = e => {
    console.log(e.target.innerHTML);
    this.props.getGifs(e.target.innerHTML);
  };

  onDelete = (e, id) => {
    this.props.deleteWord(id);
  };

  render() {
    return (
      <div>
        <h3>History</h3>
        {this.props.links.map(link => (
          <div className="History_cursor" key={link.id}>
            <span className="" onClick={e => this.onClick(e)}>
              {link.text}
            </span>
            <i className="ml-2 fas fa-trash-alt float-right" onClick={e => this.onDelete(e, link.id)} />
            <br />
          </div>
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
    getGifs: word => dispatch(getGifs(word)),
    deleteWord: id => dispatch(deleteWord(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
