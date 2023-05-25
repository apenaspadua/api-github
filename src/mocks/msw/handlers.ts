import { rest } from 'msw';

interface LoginProps {
  username: string,
  password: string
}

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username, password } = req.body as LoginProps;

    if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('is-authenticated', 'true');
      return res(
        ctx.status(200),
      );
    }

    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'Not authorized',
      }),
    );
  }),

  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
];
