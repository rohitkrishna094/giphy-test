import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewLink } from '../store/actions/HistoryAction';

class History extends Component {
  render() {
    return (
      <div>
        <h3>History</h3>
        {this.props.links.map(link => (
          <React.Fragment key={Math.random()}>
            <a href={link.url} target="_blank">
              {link.text}
            </a>
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
    addNewLink: link => dispatch(addNewLink(link))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
