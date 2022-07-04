const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// disini saya menggunakan port 5001 karena 5000 selalu dipake oleh vscode
// terimakasih

const init = async () => {
  const server = Hapi.server({
    port: 5001,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // aktivasi routenya
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
