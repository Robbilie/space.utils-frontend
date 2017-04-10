
import SwaggerClient from 'swagger-client';

const EASClient = new SwaggerClient({
  url: 'https://api.utils.space/api-docs',
  usePromise: true,
}).then((client) => {
  client.clientAuthorizations.add('ua', new SwaggerClient.ApiKeyAuthorization('X-User-Agent', 'https://utils.space/', 'header'));
  return client;
});

export default EASClient;
