import React from 'react';
import PropTypes from 'prop-types';
import Tick from './Tick';
import Hand from './Hand';
import unfixedHours from './unfixedHours';

const REGIONS = 6;
const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;

export default function Wadokei(props) {
  // Calculate the day regions
  const { sunrise, sunset } = props;
  const daytime = sunset - sunrise;
  const dayRegion = daytime / REGIONS;
  const dayAngle = (dayRegion / MILLIS_PER_DAY) * 360;
  const dayStart = 0;

  const nighttime = MILLIS_PER_DAY - daytime;
  const nightRegion = nighttime / REGIONS;
  const nightAngle = (nightRegion / MILLIS_PER_DAY) * 360;
  const nightStart = dayAngle * REGIONS;
  // Calculate the night regions

  function renderRegion(region, name, angle, offset = 0) {
    const hourTicks = [];

    for (let i = 0; i < region.length; i += 1) {
      const hour = region[i];
      hourTicks.push(
        <Tick
          key={`hour_${name}_${hour.strike}`}
          angle={offset + i * angle}
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
    hourTicks.push(
      ...renderRegion(unfixedHours.day, 'day', dayAngle, dayStart),
    );
    // night hours
    hourTicks.push(
      ...renderRegion(unfixedHours.night, 'night', nightAngle, nightStart),
    );
    return hourTicks;
  }

  // Adjust the time
  const { hour } = props;
  let { minute, second } = props;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  function renderDaySegment() {
    return (
      <div className="day_outer">
        <div
          className="day_segment"
          style={
            {
              // transform: 'translate(0, -50vw) rotate(90deg) rotate(0deg)',
              // transformOrigin: '50vw 100vw',
            }
          }
        />
      </div>
    );
  }

  function renderMiddle() {
    return (
      <div className="middle">
        <div className="middle_inner" />
      </div>
    );
  }

  function renderHourHand() {
    const angle = hour * 30 + minute / 2;

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

  function renderFaceText() {
    return (
      <div className="face_text">
        <h1>和時計</h1>
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
      <div className="face wadokei_face">
        {renderDaySegment()}
        {renderFaceText()}
        {renderHourTicksFn()}
        {renderHourHand()}
        {renderMinuteHand()}
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
