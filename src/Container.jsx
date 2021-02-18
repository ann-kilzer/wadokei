import './App.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tokei from './Tokei';
import Wadokei from './Wadokei';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

export default function Container({ sunrise, sunset, size }) {
  const [date, setDate] = useState(new Date());

  const [wa, setWa] = useState(true);

  // update the time every second
  useEffect(() => {
    const interval = setInterval(
      () => setDate(new Date()),
      1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hour = date.getHours() % 12;
  const minute = date.getMinutes();
  const second = date.getSeconds();

  function renderClock() {
    if (wa) {
      return (
        <Wadokei date={date} sunrise={sunrise} sunset={sunset} />
      );
    }
    return (<Tokei hour={hour} minute={minute} second={second} />);
  }

  const onWaChange = (checked) => {
    setWa(checked);
  };

  return (
    <div
      className="container"
      style={{
        width: `${size}px`,
      }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {renderClock()}
      </div>
      <ToggleSwitch
        id="waToggle"
        checked={wa}
        onChange={onWaChange}
        optionLabels={['和', '洋']}
      />
    </div>
  );
}

Container.propTypes = {
  sunrise: PropTypes.instanceOf(Date).isRequired,
  sunset: PropTypes.instanceOf(Date).isRequired,
  size: PropTypes.number,
};

Container.defaultProps = {
  size: 600,
};
