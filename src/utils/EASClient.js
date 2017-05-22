
import Swagger from 'swagger-client';

const UA = typeof process !== 'undefined' && process.env.UA ? process.env.UA : 'https://utils.space/';

const create_client = () => new Swagger({
  url: 'https://api.utils.space/api-docs',
  requestInterceptor: (req) => {
    req.headers['X-User-Agent'] = UA;
    return req;
  },
}).catch(e => console.log('EASClient Error:', e) || create_client());

const EASClient = create_client();

export default EASClient;
