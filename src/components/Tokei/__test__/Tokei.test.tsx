import { describe, it, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import Tokei from '../Tokei';

describe('Tokei', () => {
  it('should show 時計', async () => {
    render(<Tokei hour={9} minute={48} second={31} />)
    const title = await screen.findByText('時計')
    expect(title).toBeVisible();
  })

  test.each([
    { hour: 0, minute: 0, second: 0, expected: '0:00:00', hourAngle: '0', minuteAngle: '0', secondAngle: '0' },
    { hour: 1, minute: 15, second: 30, expected: '1:15:30', hourAngle: '37.5', minuteAngle: '90', secondAngle: '180' },
    { hour: 3, minute: 37, second: 58, expected: '3:37:58', hourAngle: '108.5', minuteAngle: '222', secondAngle: '348' },
    { hour: 9, minute: 48, second: 31, expected: '9:48:31', hourAngle: '294', minuteAngle: '288', secondAngle: '186' },
    { hour: 11, minute: 11, second: 11, expected: '11:11:11', hourAngle: '335.5', minuteAngle: '66', secondAngle: '66' }
  ])('show the time at $hour:$minute:$second', async ({ hour, minute, second, expected, hourAngle, minuteAngle, secondAngle }) => {
    render(<Tokei hour={hour} minute={minute} second={second} />)
    const digitalTime = await screen.findByText(expected)
    expect(digitalTime).toBeVisible()

    // analog time
    const hourHand = await screen.findByLabelText('hour_hand')
    expect(hourHand).toBeVisible()
    expect(hourHand).toHaveStyle(`transform: rotate(${hourAngle}deg);`)

    const minuteHand = await screen.findByLabelText('minute_hand')
    expect(minuteHand).toBeVisible()
    expect(minuteHand).toHaveStyle(`transform: rotate(${minuteAngle}deg);`)

    const secondHand = await screen.findByLabelText('second_hand')
    expect(secondHand).toBeVisible()
    expect(secondHand).toHaveStyle(`transform: rotate(${secondAngle}deg);`)
  })
})