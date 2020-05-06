const http = require('http');
const httpProxy = require('http-proxy');

const PORT = process.env.PORT || 8000;
const target = process.env.TARGET;

const proxy = httpProxy.createProxyServer({
  target,
  changeOrigin: true
});

http.createServer( (req, res) => {
  proxy.web(req, res);
}).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
