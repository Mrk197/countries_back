const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('Subregion', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subregion: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {timestamps: false }
  );
};