import './App.css';
import { FC, useEffect, useState } from 'react';
import Tokei from './components/Tokei/Tokei';
import Wadokei from './components/Wadokei/Wadokei';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';

interface ContainerProps {
    sunrise: Date;
    sunset: Date;
    size?: number;
}

const Container : FC<ContainerProps> = ({ sunrise, sunset, size=600 }) => {
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

    const onWaChange = (checked: boolean) => {
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

export default Container;