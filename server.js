const server = require('express')();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const database = require('./models/index');

const port = process.env.REST_PORT || 3000;

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(cors());

server.post('/api/posts', (req, res) => {
  database.Post.create({
    title: req.body.title,
    creator: req.body.creator,
    content: req.body.content
  })
  .then(post => res.status(200).send(post))
  .catch(error => res.status(500).send(error));
});

server.get('/api/posts', (req, res) => {
  database.Post.findAll()
  .then(posts => res.status(200).send(posts))
  .catch(error => res.status(500).send(error));
});

server.listen(port, () => {
  console.log(`[SERVER] Listening on http://localhost:${port}`);
});
