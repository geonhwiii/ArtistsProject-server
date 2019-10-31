module.exports = (sequelize, DataTypes) =>
  sequelize.define('Albums', {
    album_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    album_artist: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    album_coverImg: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '-'
    },
    quality: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  });
