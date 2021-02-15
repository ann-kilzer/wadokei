import React from 'react';
import PropTypes from 'prop-types';
import Tick from './Tick';

export default function Tokei(props) {
  // This makes the hour ticks
  function renderHourTicksFn() {
    const hourTicks = [];
    for (let i = 1; i <= 12; i += 1) {
      hourTicks.push(
        <Tick
          key={`hour_${i}`}
          angle={i * 30}
          symbol={i}
        />,
      );
    }
    return hourTicks;
  }

  // Adjust the time
  const { hour } = props;
  let { minute, second } = props;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  return (
    <>
      <h1>時計</h1>
      <h1>
        {hour}
        :
        {minute}
        :
        {second}
      </h1>
      <div className="middle" />
      {renderHourTicksFn()}
    </>
  );
}

Tokei.propTypes = {
  hour: PropTypes.number,
  minute: PropTypes.number,
  second: PropTypes.string,
};

Tokei.defaultProps = {
  hour: 12,
  minute: 0,
  second: 0,
};
