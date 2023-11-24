const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('Season', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true
    },
    temporada: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
  },
  {timestamps: false }
  );
};