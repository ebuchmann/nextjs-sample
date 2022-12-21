import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryWrapper } from '../testUtils';
import Search from './Search';

describe('Search component', () => {
  it('searches for and finds a result to display', async () => {
    render(
      <QueryWrapper>
        <Search />
      </QueryWrapper>
    );

    expect(screen.queryByTestId('result-123')).toBeFalsy();

    fireEvent.change(screen.getByTestId('input'), { target: { value: 'camper' } });

    await waitFor(() => {
      expect(screen.getByTestId('result-123')).toBeTruthy();
    });
  });
});
