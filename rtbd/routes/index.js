var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("bqsdkhcbjdfgskdhjcb");
});

router.get('/health', (req, res) => {
  res.status(200).send('Ok');
});

const server = http.createServer(app);
server.listen(3000);

module.exports = router;
