const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const PORT = process.env.PORT || 8000

http.createServer( (req, res) => {
  res.write('Hello World!');
  res.end();
  // proxy.web(req, res, { target: process.env.URL });
}).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
