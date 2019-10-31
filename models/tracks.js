module.exports = (sequelize, DataTypes) =>
  sequelize.define('Tracks', {
    track_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    track_artist: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    track_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    playtime: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
