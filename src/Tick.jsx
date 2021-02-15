import React from 'react';
import PropTypes from 'prop-types';

export default function Tick({
  angle = 0,
  length = 5,
  width = 3,
  symbol,
}) {
  return (
    <div
      className="tokei_tick"
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className="tokei_tick_inner"
        style={{
          width: `${width}px`,
          top: 22,
          bottom: `${100 - length}%`,
        }}
      />
      {symbol && (
        <div
          className="tokei_tick_symbol"
        >
          {symbol}
        </div>
      )}
    </div>
  );
}

Tick.propTypes = {
  angle: PropTypes.number,
  length: PropTypes.number,
  symbol: PropTypes.string,
  width: PropTypes.number,
};

Tick.defaultProps = {
  angle: 0,
  length: 5,
  width: 3,
  symbol: '?',
};
