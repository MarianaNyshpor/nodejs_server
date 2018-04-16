const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  if (request.url === '/') { 
    response.end('<h1>Hello world!</h1>');
  } else {
    response.end(`<h1>${request.url.substr(1)}</h1>`); 
  }
});

server.listen(process.env.PORT || 3000);
