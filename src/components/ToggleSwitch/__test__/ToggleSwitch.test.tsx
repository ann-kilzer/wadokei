import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ToggleSwitch from '../ToggleSwitch';

describe('ToggleSwitch', () => {
  it('should toggle on', async () => {
    const user = userEvent.setup()
    const mockHandler = vi.fn(() => {})
    render(<ToggleSwitch id='1' checked={false} onChange={mockHandler}/>)

    const toggle = await screen.findByRole('checkbox');
    expect(toggle).toBeVisible();

    await user.click(toggle)

    expect(mockHandler).toHaveBeenCalledOnce()
  })
})