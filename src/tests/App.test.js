import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

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
    screen.getByRole('heading', {
      name: /morty smith/i,
    });
    screen.getByText(/Origin:/i);
  });
  it('should be able to load the details page with initialEntries', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <App />
      </MemoryRouter>
    );
    const spinner = screen.getByAltText('spinner');
    await waitForElementToBeRemoved(spinner);
    screen.getByRole('heading', { name: /characters/i });
  });
});
