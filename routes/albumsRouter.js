const express = require('express');
const albumsRouter = express.Router();
const { Albums, Tracks } = require('./../models');

// TODO: GET '/api/album'
albumsRouter.get('/', async (req, res, next) => {
  try {
    const albums = await Albums.findAll({
      attributes: ['id', 'album_title', 'album_artist', 'album_coverImg']
    });
    if (!albums.length) return res.status(403).send('Cannot find any albums');
    return res.send(albums);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// TODO: GET '/api/album/:id'
albumsRouter.get('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id;
    const album = await Albums.findOne({
      where: { id },
      include: [{ model: Tracks }]
    });
    if (!album) return res.status(403).send('Cannot find a matched album');
    return res.send(album);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// TODO: POST '/api/album'
albumsRouter.post('/', async (req, res, next) => {
  const {
    album_title,
    album_artist,
    genre,
    album_coverImg,
    company,
    quality,
    releaseDate
  } = req.body;
  try {
    await Albums.create({
      album_title,
      album_artist,
      genre,
      album_coverImg,
      company,
      quality,
      releaseDate
    });
    return res.send('POST SUCCESS');
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// TODO: DELETE '/api/album/:id'
albumsRouter.delete('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id;
    const album = await Albums.findOne({ where: { id } });
    if (!album) return res.status(403).send('Cannot find a matched album');
    await Albums.destroy({ where: { id } });
    res.send('DELETE A ALBUM SUCCESS!');
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = albumsRouter;
