import Error from './Error';
import { screen, render } from '@testing-library/react';

describe('Error component', () => {
  it('renders the correct search string', () => {
    render(<Error searchTerm="testing" />);

    expect(screen.getByText(/testing/)).toBeTruthy();
  });
});
