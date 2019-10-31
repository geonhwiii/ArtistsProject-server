const express = require('express');
const router = express.Router();
const albumsRouter = require('./albumsRouter');
const tracksRouter = require('./tracksRouter');

// TODO: GET '/api'
router.get('/', (req, res) => {
  res.send('<h1>HELLO ARTIST CARD!</h1>');
});

// TODO: Router '/api/album'
router.use('/album', albumsRouter);

// TODO: Router '/api/track'
router.use('/track', tracksRouter);

module.exports = router;
