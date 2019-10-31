const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>HELLO ARTIST CARD!</h1>');
});

module.exports = router;
