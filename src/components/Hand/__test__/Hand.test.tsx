import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Hand from '../Hand';

describe('Hand', () => {
  it('should apply the Hand name to the class', async () => {
    render(<Hand name="name" />)

    const hand = await screen.findByLabelText('name_hand')
    expect(hand).toHaveClass('name_hand')
    expect(hand).toBeVisible()
  })
})