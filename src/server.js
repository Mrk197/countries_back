const express = require("express"); //Framework
const morgan = require("morgan");
//const cors = require("cors"); // cors - políticas para controlar que y quien puede hacer peticiones al servidor 
const router = require("./routes");

const server = express();

//Midlewares
server.use(morgan("dev"));
server.use(express.json());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Router principal
server.use(router);


module.exports = server;
