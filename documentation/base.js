const apiLocation = process.env.URL;
const apiVersion = '/api/v1';
module.exports = {
  swagger: '2.0',
  info: {
    title: 'Todo System API Documentation',
    version: '1.0.0',
    description:
      'This is API Documentation for this todo task mgmt application made with Express and documented with Swagger.',
    license: {
      name: 'MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      email: 'rakimsth@gmail.com',
    },
  },
  schemes: ['http', 'https'],
  host: apiLocation,
  basePath: apiVersion,
  securityDefinitions: {
    access_token: {
      type: 'apiKey',
      in: 'header',
      name: 'access_token',
      description: 'get token using user login method',
    },
  },
};
