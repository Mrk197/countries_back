const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
      },
      duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 24,
          min: 1,
          isNumeric: true
        }
      },
    });
  };