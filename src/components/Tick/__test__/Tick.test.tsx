import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Tick from '../Tick';

describe('Tick', () => {
    it('should render the Tick', async () => {
        render(<Tick symbol='?' emoji='🐔' secondarySymbol='2' regionName='chicken' />)

        const tick = await screen.findByLabelText('tick')
        expect(tick).toBeVisible()
        expect(tick).toHaveTextContent('🐔')
        expect(tick).toHaveTextContent('?')
        expect(tick).toHaveTextContent('2')
    })
})