const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Review = sequelize.define(
  "review",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    appID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appStoreName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewHeading: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewUserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Disable timestamps
  }
);

module.exports = Review;
