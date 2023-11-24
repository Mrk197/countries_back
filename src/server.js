const express = require("express"); //Framework
const morgan = require("morgan");
const cors = require("cors"); // cors - políticas para controlar que y quien puede hacer peticiones al servidor 
const router = require("./routes");

const server = express();

//Midlewares
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

//Router principal
server.use(router);


module.exports = server;
