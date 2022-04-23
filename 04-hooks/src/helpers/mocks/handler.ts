import { rest } from 'msw';

export const handlers = [
  rest.get(`https://swapi.dev/api/people`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            birth_year: '19BBY',
            eye_color: 'blue',
            gender: 'male',
            hair_color: 'blond',
            height: '172',
            mass: '77',
            name: 'Luke Skywalker',
            skin_color: 'fair',
          },
        ],
      })
    );
  }),

  rest.get(`https://swapi.dev/api/people/?search=r2-d2`, (req, res, ctx) => {
    // const searchParam = req.url.searchParams.get('?search=');
    return res(
      ctx.status(200),
      // ctx.json({ searchParam })
      ctx.json({
        results: [
          {
            birth_year: '112BBY',
            eye_color: 'yellow',
            gender: 'n/a',
            hair_color: 'n/a',
            height: '167',
            mass: '75',
            name: 'r2-d2',
            skin_color: 'gold',
          },
        ],
      })
    );
  }),
];
