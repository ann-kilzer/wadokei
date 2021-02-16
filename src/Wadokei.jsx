import React from 'react';
import PropTypes from 'prop-types';
import Tick from './Tick';
import Hand from './Hand';
import unfixedHours from './unfixedHours';

const REGIONS = 6;

export default function Wadokei(props) {
  // Calculate the day regions
  const { sunrise, sunset } = props;
  const daytime = sunset - sunrise;
  const dayRegion = daytime / REGIONS;
  console.log(daytime, dayRegion);
  // Calculate the night regions

  function renderRegion(region, offset = 0) {
    const hourTicks = [];

    for (let i = 0; i < region.length; i += 1) {
      const hour = region[i];
      hourTicks.push(
        <Tick
          key={`hour_night_${hour.strike}`}
          angle={offset + i * 30}
          symbol={hour.zodiacSymbol}
        />,
      );
    }
    return hourTicks;
  }

  // This makes the unfixed hour ticks
  function renderHourTicksFn() {
    const hourTicks = [];
    // day hours
    hourTicks.push(...renderRegion(unfixedHours.day));
    // night hours
    hourTicks.push(...renderRegion(unfixedHours.night, 180));
    return hourTicks;
  }

  // Adjust the time
  const { hour } = props;
  let { minute, second } = props;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

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
          {minute}
          :
          {second}
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="tokei_face">
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

Wadokei.propTypes = {
  hour: PropTypes.number,
  minute: PropTypes.number,
  second: PropTypes.number,
  sunrise: PropTypes.instanceOf(Date).isRequired,
  sunset: PropTypes.instanceOf(Date).isRequired,

};

Wadokei.defaultProps = {
  hour: 12,
  minute: 0,
  second: 0,
};
