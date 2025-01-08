const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ensure 'db.json' exists in the same directory
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(auth);
server.use(router);

const port = 5000; // Define the port for the server
server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
});