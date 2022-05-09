global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));
import { rest } from 'msw';
import { data } from './tests/fixtures/apiData';

const apiURL = 'https://rickandmortyapi.com/api/character';

data; //?
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(apiURL, (req, res, ctx) => res(ctx.json(data)))
);

beforeAll(() => server.listen());
afterAll(() => server.close());
