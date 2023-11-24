require("dotenv").config();
const { Sequelize } = require("sequelize");
//const ModelCountry = require("./models/Country");
//const ModelActivity = require("./models/Activity");

const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, URL_DB_DEPLOY } = process.env;

//CONEXION
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
//   logging: false, 
//   native: false, 
// }); 

const sequelize = new Sequelize(URL_DB_DEPLOY, {
  logging: false, 
  native: false, 
}); 

//INSTANCIANDO LOS MODELOS
// ModelCountry(sequelize);
// ModelActivity(sequelize);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    //Importando los modelos
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

//Instanciando los modelos
modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//RELACIONES
const { Country, Activity, Subregion, Continent, Season, Difficulty } = sequelize.models;
//Muchos a muchos
Country.belongsToMany(Activity, {through: 'Country_Activity'});
Activity.belongsToMany(Country, {through: 'Country_Activity'});
//Uno a muchos
// Subregion.hasMany(Country);
// Country.belongsTo(Subregion);
//Uno a muchos
Continent.hasMany(Subregion);
Subregion.belongsTo(Continent);
//Uno a muchos
Season.hasMany(Activity, {foreignKey: 'season_id'});
Activity.belongsTo(Season, {foreignKey: 'season_id'});
//Uno a muchos
Difficulty.hasMany(Activity, {foreignKey: 'difficulty_id'});
Activity.belongsTo(Difficulty, {foreignKey: 'difficulty_id'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};