/* eslint-disable no-unused-vars */
import WaTime from './waTime';

const midnight = new Date('2021-02-17T06:26:31');
const sunrise = new Date('2021-02-17T06:26:31');
const sunset = new Date('2021-02-17T17:23:29');

test('Sunrise is day, zero hours, zero minutes', () => {
  const wt = new WaTime(sunrise, sunrise, sunset);

  expect(wt.isDay).toBe(true);
  expect(wt.waHour).toBe(0);
  expect(wt.waHour).toBe(0);
});

test('Sunset is not day, 0 hours', () => {
  const wt = new WaTime(sunset, sunrise, sunset);

  expect(wt.isDay).toBe(false);
  expect(wt.waHour).toBe(0);
});
