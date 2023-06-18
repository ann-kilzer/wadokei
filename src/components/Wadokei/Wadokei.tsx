import { FC} from 'react';
import Tick from '../Tick/Tick';
import Hand from '../Hand/Hand';
import unfixedHours, { Region } from './unfixedHours';
import WaTime from './waTime';

const REGIONS = 6;
const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
const MINUTES_PER_DAY = 24 * 60;

interface WadokeiProps {
  date: Date;
  sunrise: Date;
  sunset: Date;
}

const Wadokei : FC<WadokeiProps> = ({date, sunrise, sunset}) => {
  const waTime = new WaTime(date, sunrise, sunset);

  // Calculate the day regions
  const daytime = sunset.valueOf() - sunrise.valueOf();
  const dayRegion = daytime / REGIONS;
  const dayAngle = (dayRegion / MILLIS_PER_DAY) * 360;
  const dayStart = 360 - 3 * dayAngle;

  // Calculate the night regions
  const nighttime = MILLIS_PER_DAY - daytime;
  const nightRegion = nighttime / REGIONS;
  const nightAngle = (nightRegion / MILLIS_PER_DAY) * 360;
  const nightStart = dayAngle * 3;

  function renderRegion(region: Region, name: string, angle: number, offset = 0) {
    const hourTicks = [];

    for (let i = 0; i < region.length; i += 1) {
      const hour = region[i];
      hourTicks.push(
        <Tick
          key={`hour_${name}_${hour.strike}`}
          angle={offset + i * angle}
          symbol={hour.numeral}
          emoji={hour.zodiacEmoji}
          secondarySymbol={hour.zodiacSymbol}
          regionName={name}
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

  function renderDaySegment() {
    // calculate our gradient points based on sunrise and sunset
    const blueMorning = nightAngle;
    const dawn = 2 * nightAngle;
    const pinkMorning = 3 * nightAngle;
    const yellowMorning = 3 * nightAngle + dayAngle;
    const noon = 180;
    const yellowAfternoon = noon + 2 * dayAngle;
    const pinkAfternoon = 360 - 3 * nightAngle;
    const sundown = 360 - 2 * nightAngle;
    const blueEvening = 360 - nightAngle;
    const daylightStyle = {
      background: `conic-gradient(
        from 180deg,
        #00173B ${blueMorning}deg,
        #072C70 ${dawn}deg,
        #E772A6 ${pinkMorning}deg,
        #FDC500 ${yellowMorning}deg,
        #FFF8D6 ${noon}deg,
        #FDC500 ${yellowAfternoon}deg,
        #FD5E5E ${pinkAfternoon}deg,
        #00296B ${sundown}deg,
        #00173B ${blueEvening}deg
        )`,
    };

    return (
      <div
        className="day_segment"
        style={daylightStyle}
      />
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
    const angle = dayStart + (waTime.waMinute / MINUTES_PER_DAY) * 360;

    return (
      <Hand
        name="hour"
        length={60}
        width={7}
        angle={angle}
      />
    );
  }

  function renderFaceText() {
    const numeral = waTime.isDay
      ? unfixedHours.day[waTime.waHour].numeral
      : unfixedHours.night[waTime.waHour].numeral;
    return (
      <div className="face_text">
        <h1>和時計</h1>
        <h1>
          {numeral}
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="face wadokei_face wa_text">
        {renderDaySegment()}
        {renderFaceText()}
        {renderHourTicksFn()}
        {renderHourHand()}
        {renderMiddle()}
      </div>
    </>
  );
}
 export default Wadokei;
