const server = require('express')();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const port = process.env.REST_PORT || 3000;

server.use(logger('dev'));
server.use(bodyParser.json());

server.listen(port, () => {
  console.log(`[SERVER] Listening on http://localhost:${port}`);
});
