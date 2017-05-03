
import Swagger from 'swagger-client';

const UA = typeof process !== 'undefined' && process.env.UA ? process.env.UA : 'https://utils.space/';

const EASClient = new Swagger({
  url: 'https://api.utils.space/api-docs',
  requestInterceptor: (req) => {
    req.headers['User-Agent'] = UA;
    if (req.method === 'POST') {
      req.body = JSON.stringify(req.body);
    }
    return req;
  },
});

export default EASClient;
