const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    imagenBandera: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    area: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    poblacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    continente: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  },
  {timestamps: false }
  );
};