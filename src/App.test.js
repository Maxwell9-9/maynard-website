import { render, screen } from '@testing-library/react';
import App from './App';

let appendChildSpy;
let removeChildSpy;

// Polyfill for ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

beforeEach(() => {
  window.history.pushState({}, '', '/download-page');
  appendChildSpy = jest.spyOn(document.head, 'appendChild').mockImplementation((node) => node);
  removeChildSpy = jest.spyOn(document.head, 'removeChild').mockImplementation((node) => node);
});

afterEach(() => {
  appendChildSpy.mockRestore();
  removeChildSpy.mockRestore();
  window.history.pushState({}, '', '/');
});

test('renders download page heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /download maynard vst/i });
  expect(heading).toBeInTheDocument();
});
