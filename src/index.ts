import * as http from 'http';

const PORT = 10001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
