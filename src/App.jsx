import './App.css';
import React, { useEffect, useState } from 'react';
import Tokei from './Tokei';

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

  return (
    <div className="App">
      <Tokei hour={hour} minute={minute} second={second} />
    </div>
  );
}

export default App;
