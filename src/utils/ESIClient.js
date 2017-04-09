
import SwaggerClient from 'swagger-client';

const ESIClient = new SwaggerClient({
  url: "https://esi.tech.ccp.is/latest/swagger.json",
  usePromise: true
}).then(client => {
  client.clientAuthorizations.add("ua", new SwaggerClient.ApiKeyAuthorization("X-User-Agent", "https://utils.space/", "header"));
  return client;
});

export default ESIClient;
