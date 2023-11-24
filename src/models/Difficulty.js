const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('Difficulty', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dificultad: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
  },
  {timestamps: false }
  );
};