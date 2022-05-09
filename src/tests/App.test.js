import App from '../App';
import {
  screen,
  render,
  waitForElementToBeRemoved,
  getByAltText,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('should be able to navigate to characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkTo = screen.getByRole('link', {
      name: /rick and morty characters/i,
    });
    userEvent.click(linkTo);
    const spinner = screen.getByAltText('spinner');
    await waitForElementToBeRemoved(spinner);
    screen.getByRole('heading', {
      name: /characters/i,
    });
    screen.getByRole('img', {
      name: /image of rick sanchez/i,
    });
    userEvent.click(screen.getByRole('img', { name: /image of morty smith/i }));
    const mortyDetail = screen.getByRole('heading', {
      name: /morty smith/i,
    });
    screen.getByText(/Origin:/i);
  });
});
