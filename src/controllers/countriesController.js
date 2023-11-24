const axios = require('axios');
require("dotenv").config();
const {Country, Activity, Season, Difficulty} = require('../db');
const {filterDataCountriesAPI, filterCountriesAPI} = require('../utils/index');
const {URL_API} = process.env;
const { Op } = require("sequelize");

const getCountriesBD = async (name) => {
    if (name) {
        return await Country.findAll({
            where: {
                nombre: {[Op.iLike]: `${name}%`}
            },
            include: {
            model:Activity,
            attributes: ["id", "nombre", "duracion"],
            include: [
                {
                    model: Season,
                    attributes: ["temporada"]
                },
                {
                    model: Difficulty,
                    attributes: ["dificultad"]
                }
            ]
        }
        });
    }
    return await Country.findAll({
        include: {
            model:Activity,
            attributes: ["id", "nombre", "duracion"],
            include: [
                {
                    model: Season,
                    attributes: ["temporada"]
                },
                {
                    model: Difficulty,
                    attributes: ["dificultad"]
                }
            ]
        }
    });
};

const getCountriesAPI = async (name) => {
    const countries = (await axios.get(URL_API)).data;
    if (name) {
        return filterCountriesAPI(countries, name);
    }
     return filterDataCountriesAPI(countries);
};

const getDetailCountryById = async (id) => {
    const countryById = await Country.findByPk(id, {
        include: {
            model:Activity,
            attributes: ["id", "nombre", "duracion"],
            include: [
                {
                    model: Season,
                    attributes: ["temporada"]
                },
                {
                    model: Difficulty,
                    attributes: ["dificultad"]
                }
            ]
        }
    });
    return countryById;
    //const countries = (await axios.get(URL_API)).data;
    //return filterCountriesAPI(countries, null, id)[0];
};

const postAllCountries = async () => {
    try {
        const countries = (await axios.get(URL_API)).data;
        const allFilterCountries = filterDataCountriesAPI(countries);
        //console.log(allFilterCountries);
        const allDAta = await Country.bulkCreate(allFilterCountries);
        return allDAta;
    } catch (error) {
        return error
    }
}

module.exports = {
    getCountriesBD,
    getCountriesAPI,
    getDetailCountryById,
    postAllCountries
}