import { render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const apiUrl = 'https://jsonplaceholder.typicode.com';
const server = setupServer(
  rest.get(`${apiUrl}/users/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
      }),
    );
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders user data', async () => {
  const { getByText } = render(<App />);

  await waitFor(() => getByText(/Leanne Graham/i));

  expect(getByText(/Leanne Graham/i)).toBeInTheDocument();
  expect(getByText(/Sincere@april.biz/i)).toBeInTheDocument();
});

test('renders loading message', async () => {
  const { getByText } = render(<App />);

  expect(getByText(/Loading/i)).toBeInTheDocument();

  await waitFor(() => getByText(/Leanne Graham/i));

  expect(getByText(/Loading/i)).not.toBeInTheDocument();
});
