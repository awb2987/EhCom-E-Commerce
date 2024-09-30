const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Tag model represents tags associated with products in the database
class Tag extends Model {}

// Set up fields and rules for Tag model
Tag.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tags',
  }
);

module.exports = Tag;
