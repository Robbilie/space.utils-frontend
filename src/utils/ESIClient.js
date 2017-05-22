
import Swagger from 'swagger-client';

const UA = typeof process !== 'undefined' && process.env.UA ? process.env.UA : 'https://utils.space/';

const create_client = () => new Swagger({
  url: 'https://esi.tech.ccp.is/_latest/swagger.json',
  requestInterceptor: (req) => {
    req.headers['X-User-Agent'] = UA;
    return req;
  },
}).catch(e => console.log('ESIClient Error:', e) || create_client());

const ESIClient = create_client();

export default ESIClient;
