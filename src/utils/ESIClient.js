
import Swagger from 'swagger-client';

const UA = typeof process !== 'undefined' && process.env.UA ? process.env.UA : 'https://utils.space/';

const ESIClient = new Swagger({
  url: 'https://esi.tech.ccp.is/_latest/swagger.json',
  requestInterceptor: (req) => {
    req.headers['X-User-Agent'] = UA;
    return req;
  },
});

export default ESIClient;
