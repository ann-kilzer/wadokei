import './App.css';
import { useEffect, useState } from 'react';
import Container from './Container';
import axios from 'axios';
import { APITimeToDate, isSameDay } from './timeUtils/timeUtils';

const MILLIS_PER_MINUTE = 60 * 1000;

function App() {
    const TOKYO_LAT = 35.68;
    const TOKYO_LON = 139.75;

    const [today, setToday] = useState(new Date());
    const [sunrise, setSunrise] = useState(new Date());
    const [sunset, setSunset] = useState(new Date());
    const [lat, setLat] = useState(TOKYO_LAT)
    const [lon, setLon] = useState(TOKYO_LON)

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude)
                setLon(position.coords.longitude)
                console.log(`Updating coordinates: ${lat}, ${lon}`);
            });
        } else {
            console.warn('Geolocation is not supported by this browser.')
        }
    }

    async function fetchSunsetSunrise() {
        const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=today&formatted=0`;
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
                setSunrise(new Date('2021-02-18T06:24:15'));
                setSunset(new Date('2021-02-18T17:25:27'));
            });
    }

    // initial call
    useEffect(() => {
        getLocation();
    });

    useEffect(() => {
        fetchSunsetSunrise()
    }, [lat, lon])


    // recheck every interval
    useEffect(() => {
        const interval = setInterval(
            () => {
                setToday(new Date());
                if (!isSameDay(today, sunrise)) {
                    fetchSunsetSunrise();
                }
            },
            MILLIS_PER_MINUTE,
        );

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div className="App">
            <Container sunrise={sunrise} sunset={sunset} />
        </div>
    );
}

export default App;
