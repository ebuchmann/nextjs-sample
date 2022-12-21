import { rest } from 'msw';

export const handlers = [
  rest.get('https://search.outdoorsy.com/rentals', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [{ id: '123', attributes: { name: 'camper' } }],
        included: [
          {
            id: '123',
            attributes: {
              primary: true,
              url: 'https://res.cloudinary.com/outdoorsy/image/upload/v1655147335/p/rentals/302944/images/s1ysfrwoq0n1clff4nsm.jpg',
              rental_id: 123,
            },
          },
        ],
      })
    );
  }),
];
