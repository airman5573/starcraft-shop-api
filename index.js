const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// constants
const baseUrl = '/api';

// cors
server.use(cors());

// middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

// custom auth code
// 모든 product를 요청하는 경우
server.get(`${baseUrl}/products`, (req, res) => {
  const chain = router.db.get('products');
  const products = chain.value();
  console.log('products : ', products);
  res.status(201).json(products);
});

// 개별 product를 요청하는 경우
server.get(`${baseUrl}/product/:id`, (req, res) => {
  
});

// router를 맨 마지막에 적어야 한다
server.use(router);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log('JSON Server is running')
});
