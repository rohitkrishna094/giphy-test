import React from 'react';
import PropTypes from 'prop-types';
export default function Card(props) {
  const style = {
    width: '18rem'
  };

  const { entry } = props;

  return (
    <div className="card" style={style}>
      <img
        className="card-img-top img-thumbnail img-fluid"
        style={{
          width: '300px',
          height: '200px'
        }}
        src={entry.images.fixed_height.url}
        alt={entry.title}
      />
      {/* <div className="card-body">
        <h5 className="card-title">{entry.title}</h5>
      </div> */}
    </div>
  );
}

Card.propTypes = {
  entry: PropTypes.object.isRequired
};
