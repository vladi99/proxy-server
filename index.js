const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: process.env.URL });
});

const PORT = process.env.PORT || 8000

server.listen(() => {
  console.log(`Server is running on port ${PORT}.`);
});
