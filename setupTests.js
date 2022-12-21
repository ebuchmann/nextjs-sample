import { server } from './mocks/server.js';

require('whatwg-fetch');

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
