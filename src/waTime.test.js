/* eslint-disable no-unused-vars */
import WaTime from './waTime';

const sunrise = new Date('2021-02-17T06:26:31');
const sunset = new Date('2021-02-17T17:23:29');

test('Sunrise is day, zero hours, zero minutes', () => {
  const wt = new WaTime(sunrise, sunrise, sunset);

  expect(wt.isDay).toBe(true);
  expect(wt.waHour).toBe(0);
  expect(wt.waHour).toBe(0);
});

test('Sunset is not day, 0th hours, 657 minutes from dawn', () => {
  const wt = new WaTime(sunset, sunrise, sunset);

  expect(wt.isDay).toBe(false);
  expect(wt.waHour).toBe(0);
  expect(wt.waMinute).toBe(657);
});

test('Noon is day, 3rd hour, 334 minutes from dawn', () => {
  const wt = new WaTime(new Date('2021-02-17T12:00:00'), sunrise, sunset);

  expect(wt.isDay).toBe(true);
  expect(wt.waHour).toBe(3);
  expect(wt.waMinute).toBe(334);
});

test('Midnight is night, 3rd hour, N minutes from dawn', () => {
  const wt = new WaTime(new Date('2021-02-17T00:00:00'), sunrise, sunset);

  expect(wt.isDay).toBe(false);
  expect(wt.waHour).toBe(3);
  expect(wt.waMinute).toBe(1054);
});

test('23:59 is night, 3rd hour, N minutes from dawn', () => {
  const wt = new WaTime(new Date('2021-02-17T23:59:00'), sunrise, sunset);

  expect(wt.isDay).toBe(false);
  expect(wt.waHour).toBe(3);
  expect(wt.waMinute).toBe(1053);
});
