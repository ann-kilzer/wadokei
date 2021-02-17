import './App.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tokei from './Tokei';
import Wadokei from './Wadokei';

export default function Container(props) {
  const { sunrise, sunset } = props;
  const [date, setDate] = useState(new Date());

  const [wa] = useState(true);

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

  return (
    <div className="App">
      {renderClock()}
    </div>
  );
}
Container.propTypes = {
  sunrise: PropTypes.instanceOf(Date).isRequired,
  sunset: PropTypes.instanceOf(Date).isRequired,
};
