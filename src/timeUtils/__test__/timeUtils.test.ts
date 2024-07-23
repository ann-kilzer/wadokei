import { describe, expect, test } from 'vitest';
import { APITimeToDate, isSameDay } from '../timeUtils';


describe('timeUtils', () => {
  test.each([
    [new Date('2024-02-18T06:24:15'), new Date('2024-02-18T06:24:15'), true],
    [new Date('2024-02-18T06:24:15'), new Date('2024-02-19T06:24:15'), false]
  ])('should detect the same day: %s %s', (day1, day2, expected) => {
    expect(isSameDay(day1, day2)).toEqual(expected)
    expect(isSameDay(day2, day1)).toEqual(expected)
  })

  test.each([
    ['2024-07-22T19:41:00+00:00', new Date('2024-07-22T19:41:00.000Z')],
    ['2024-05-22T01:01:05+00:00', new Date('2024-05-22T01:01:05.000Z')]
  ])('should convert API response %s to locale time %s', (APITime, date) => {
    expect(APITimeToDate(APITime)).toEqual(date)
  })
})