const { Router } = require("express");
const {getCountriesHandler, getDetailCountryHandler, postAllCountriesHandler} = require("../handlers/countriesHandler");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:idPais", getDetailCountryHandler);

countriesRouter.post("/", postAllCountriesHandler);

module.exports = countriesRouter;