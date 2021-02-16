import './App.css';
import React, { useEffect, useState } from 'react';
import Tokei from './Tokei';
import Wadokei from './Wadokei';

function App() {
  const [date, setDate] = useState(new Date());

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

  // TODO: Fetch from https://sunrise-sunset.org/api
  const sunrise = Date('2021-02-16T06:26:31');
  const sunset = Date('2021-02-16T17:23:29');

  return (
    <div className="App">
      <Wadokei hour={hour} minute={minute} second={second} sunrise={sunrise} sunset={sunset} />
      <Tokei hour={hour} minute={minute} second={second} />
    </div>
  );
}

export default App;
