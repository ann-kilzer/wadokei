import './App.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tokei from './Tokei';
import Wadokei from './Wadokei';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

export default function Container({ sunrise, sunset }) {
  const [date, setDate] = useState(new Date());

  const [wa, setWa] = useState(false);

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
    <div className="App">
      <ToggleSwitch
        id="waToggle"
        checked={wa}
        onChange={onWaChange}
        optionLabels={['和', '洋']}
      />
      {renderClock()}
    </div>
  );
}
Container.propTypes = {
  sunrise: PropTypes.instanceOf(Date).isRequired,
  sunset: PropTypes.instanceOf(Date).isRequired,
};
