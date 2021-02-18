import './App.css';
import React, { useEffect, useState } from 'react';
import Container from './Container';

const axios = require('axios');

const MILLIS_PER_MINUTE = 60 * 1000;

function App() {
  // TODO: Fetch from https://sunrise-sunset.org/api

  // default to Japan
  const lat = 35.68;
  const lon = 35.68;
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`;

  const [today, setToday] = useState(new Date());
  const [sunrise, setSunrise] = useState(new Date());
  const [sunset, setSunset] = useState(new Date());

  const timeFormat = /^(?<hour>\d+):(?<minute>\d+):(?<second>\d+)\s(?<meridiem>\w\w)$/;

  function APITimeToDate(APITime) {
    const found = APITime.match(timeFormat);

    const hour = (found.groups.meridiem === 'PM')
      ? parseInt(found.groups.hour, 10) + 12
      : parseInt(found.groups.hour, 10);

    const created = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      hour,
      parseInt(found.groups.minute, 10),
      parseInt(found.groups.second, 10),
    );
    console.log(today);
    console.log(created);
    return created;
  }

  function fetchSunsetSunrise() {
    axios.get(url)
      .then((response) => {
        // handle success
        console.log(response.data.results);
        setSunrise(APITimeToDate(response.data.results.sunrise));
        setSunset(APITimeToDate(response.data.results.sunset));
      })
      .catch((error) => {
        // handle error
        console.log(error);
        setSunrise(new Date('2021-02-19T03:24:00'));
        setSunset(new Date('2021-02-19T03:24:00'));
      })
      .then(() => {
        // always executed
      });
  }

  // initial call
  useEffect(() => {
    fetchSunsetSunrise();
  }, []);

  function sameDay(day1, day2) {
    return day1.getDate === day2.getDate()
      && day1.getMonth === day2.getMonth()
      && day1.getYear === day2.getYear();
  }

  // recheck every interval
  useEffect(() => {
    const interval = setInterval(
      () => {
        setToday(new Date());
        console.log('checking');
        if (!sameDay(today, sunrise)) {
          fetchSunsetSunrise();
        }
      },
      MILLIS_PER_MINUTE,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <Container sunrise={sunrise} sunset={sunset} />
    </div>
  );
}

export default App;
