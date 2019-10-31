const express = require('express');
const tracksRouter = express.Router();
const { Tracks } = require('./../models');

// TODO: GET '/api/track'
tracksRouter.get('/', async (req, res, next) => {
  try {
    const tracks = await Tracks.findAll();
    if (!tracks.length) return res.status(403).send('Cannot find any tracks!');
    return res.send(tracks);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// TODO: GET '/api/track/:id'
tracksRouter.get('/:id', async (req, res, next) => {
  const id = +req.params.id;
  try {
    const track = await Tracks.findOne({ where: { id } });
    if (!track) return res.status(403).send('Cannot find a matched track');
    return res.send(track);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// TODO: POST '/api/track/:id'
tracksRouter.post('/', async (req, res, next) => {
  const { track_title, track_artist, track_url, playtime, album_id } = req.body;
  try {
    await Tracks.create({
      track_title,
      track_artist,
      track_url,
      playtime,
      album_id
    });
    res.send('POST A TRACK SUCCESS!');
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// TODO: POST '/api/track/:id'
tracksRouter.delete('/:id', async (req, res, next) => {
  const id = +req.params.id;
  try {
    const track = await Tracks.findOne({ where: { id } });
    if (!track) return res.status(403).send('Cannot find a matched track!');
    await Tracks.destroy({ where: { id } });
    res.send('DELETE A TRACK SUCCESS!');
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = tracksRouter;
