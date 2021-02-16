import './App.css';
import React from 'react';
import Container from './Container';

function App() {
  // TODO: Fetch from https://sunrise-sunset.org/api
  const sunrise = new Date('2021-02-16T06:26:31');
  const sunset = new Date('2021-02-16T17:23:29');

  console.log(sunset - sunrise);

  return (
    <div className="App">
      <Container sunrise={sunrise} sunset={sunset} />
    </div>
  );
}

export default App;
