import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  onClick = (e, image) => {
    window.open(image, '_blank');
  };

  render() {
    const { entry } = this.props;
    const style = {
      width: '18rem'
    };

    return (
      <div className="card Card_cursor" style={style} onClick={e => this.onClick(e, entry.image)}>
        <img
          className="card-img-top rounded img-fluid px-3 py-3"
          style={{
            width: '300px',
            height: '200px'
          }}
          src={entry.image}
          alt={entry.title}
        />
      </div>
    );
  }
}

Card.propTypes = {
  entry: PropTypes.object.isRequired
};

export default Card;
