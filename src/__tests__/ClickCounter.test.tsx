/// <reference types="@testing-library/jest-dom" />
import { render, screen, fireEvent } from '@testing-library/react';
import { ClickCounter } from '../ClickCounter';

describe('ClickCounter', () => {
  it('shows zero clicks initially', () => {
    render(<ClickCounter />);
    expect(screen.getByRole('button')).toHaveTextContent('Clicked 0 times');
  });

  it('increments the label when clicked', () => {
    render(<ClickCounter />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Clicked 1 times');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Clicked 2 times');
  });
});
