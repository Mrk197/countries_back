const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Continent', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    continente: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {timestamps: false }
  );
};