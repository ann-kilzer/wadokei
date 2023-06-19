import './App.css';
import { useEffect, useState } from 'react';
import Container from './Container';
import axios from 'axios';

const MILLIS_PER_MINUTE = 60 * 1000;

function App() {
  // default to Japan
  const lat = 35.68;
  const lon = 139.75;
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=today&formatted=0`;

  const [today, setToday] = useState(new Date());
  const [sunrise, setSunrise] = useState(new Date());
  const [sunset, setSunset] = useState(new Date());

  function APITimeToDate(APITime: string) {
    const UTCTime = new Date(APITime);
    return new Date(UTCTime.toLocaleString());
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
        console.error(error);
        setSunrise(new Date('2021-02-18T6:24:15'));
        setSunset(new Date('2021-02-18T17:25:27'));
      });
  }

  // initial call
  useEffect(() => {
    fetchSunsetSunrise();
  }, []);

  function sameDay(day1: Date, day2: Date) {
    return day1.getDate() === day2.getDate()
      && day1.getMonth() === day2.getMonth()
      // && day1.getYear() === day2.getYear();
  }

  // recheck every interval
  useEffect(() => {
    const interval = setInterval(
      () => {
        setToday(new Date());
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
