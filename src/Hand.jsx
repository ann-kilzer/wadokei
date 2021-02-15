import React from 'react';
import PropTypes from 'prop-types';

export default function Hand({
  name,
  angle,
  length,
  width,
  oppositeLength,
}) {
  return (
    <div
      className={`outer_hand ${name}_hand`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className={`inner_hand ${name}_hand`}
        style={{
          width: `${width}px`,
          top: `${50 - (length / 2)}%`,
          bottom: `${50 - (oppositeLength / 2)}%`,
        }}
      />
    </div>
  );
}

Hand.propTypes = {
  name: PropTypes.string,
  angle: PropTypes.number,
  length: PropTypes.number,
  width: PropTypes.number,
  oppositeLength: PropTypes.number,
};

Hand.defaultProps = {
  name: 'unknown',
  angle: 0,
  length: 95,
  width: 3,
  oppositeLength: 10,
};
