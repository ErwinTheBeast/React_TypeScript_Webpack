/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('App (portfolio landing)', () => {
  it('renders the hero heading and key sections', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /shubham deshpande/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { level: 2, name: /featured projects/i })
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole('link', { name: /contact/i }).length
    ).toBeGreaterThan(0);
  });
});
