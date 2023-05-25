const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/mocks/json-server/db.json');
const middlewares = jsonServer.defaults();
const crypto = require('crypto');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get('users').find({ username, password }).value();

  if (user) {
    const token = generateAccessToken();
    res.status(200).jsonp({ success: true, token });
  } else {
    res.status(401).jsonp({ error: 'Invalid credentials' });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function generateAccessToken() {
  const tokenLength = 32;
  const buffer = crypto.randomBytes(tokenLength);
  const token = buffer.toString('hex');
  return token;
}