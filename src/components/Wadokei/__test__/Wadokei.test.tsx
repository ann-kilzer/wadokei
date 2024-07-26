import { describe, it, expect, } from 'vitest'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/react'
import Wadokei from '../Wadokei';

describe('Wadokei', () => {
    const now = new Date(2024, 6, 4, 12, 25, 33, 0)
    const sunrise = new Date(2024, 6, 4, 5, 33, 0, 0)
    const sunset = new Date(2024, 6, 4, 17, 33, 0, 0)

    it('should show 和時計', async () => {
        render(<Wadokei date={now} sunrise={sunrise} sunset={sunset} />)
        const title = await screen.findByText('和時計')
        expect(title).toBeVisible();
    })

    it('should display 12 ticks', async () => {
        render(<Wadokei date={now} sunrise={sunrise} sunset={sunset} />)
        const ticks = await screen.findAllByLabelText('tick')
        expect(ticks).toHaveLength(12)
    })

    it('should gracefully handle invalid sunset / sunrise', async () => {
    // intentionally swap sunrise and sunset to break the math
        render(<Wadokei date={now} sunrise={sunset} sunset={sunrise} />)
        const ticks = await screen.findAllByLabelText('tick')
        expect(ticks).toHaveLength(12)
    // TODO: how to verify this one?
    })
})