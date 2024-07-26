import {FC} from 'react';
import Tick from '../Tick/Tick';
import Hand from '../Hand/Hand';

interface TokeiProps {
    hour: number;
    minute: number;
    second: number;
}

const Tokei: FC<TokeiProps> = ({hour, minute, second}) => {
    // This makes the hour ticks
    function renderHourTicksFn() {
        const hourTicks = [];
        for (let i = 1; i <= 12; i += 1) {
            hourTicks.push(
                <Tick
                    key={`hour_${i}`}
                    angle={i * 30}
                    symbol={`${i}`}
                />,
            );
        }
        return hourTicks;
    }

    // Adjust the time
    const stringMinute = minute < 10 ? `0${minute}` : minute;
    const stringSecond = second < 10 ? `0${second}` : second;

    function renderMiddle() {
        return (
            <div className="middle">
                <div className="middle_inner" />
            </div>
        );
    }

    function renderHourHand() {
        const angle = hour * 30 + (minute / 2);

        return (
            <Hand
                name="hour"
                length={60}
                width={7}
                angle={angle}
            />
        );
    }

    function renderMinuteHand() {
        return (
            <Hand
                name="minute"
                length={95}
                width={3}
                angle={minute * 6}
            />
        );
    }

    function renderSecondHand() {
        return (
            <Hand
                name="second"
                length={90}
                width={1}
                angle={second * 6}
            />
        );
    }

    function renderFaceText() {
        return (
            <div className="face_text">
                <h1>時計</h1>
                <h1>
                    {hour}
          :
                    {stringMinute}
          :
                    {stringSecond}
                </h1>
            </div>
        );
    }

    return (
        <>
            <div className="face tokei_face">
                {renderFaceText()}
                {renderHourTicksFn()}
                {renderHourHand()}
                {renderMinuteHand()}
                {renderSecondHand()}
                {renderMiddle()}
            </div>
        </>
    );
}


export default Tokei;