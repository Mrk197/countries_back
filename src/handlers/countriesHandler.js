const {
    getCountriesBD,
    getCountriesAPI,
    getDetailCountryById,
    postAllCountries
} = require('../controllers/countriesController')

const getCountriesHandler = async (req, res) => {
    const {name} = req.query;
    try {
        let countriesbd = []
        if(name){
            countriesbd = await getCountriesBD(name);
            if (Object.keys(countriesbd).length === 0) {
                return res.status(406).json("No se encontro ningún país con ese nombre");
            }
            //return res.status(200).send(`Muestra todos aquellos países que coinciden con el nombre ${name}`);
        }
        else {
            countriesbd = await getCountriesBD();
        }
        //return res.status(200).send("Muestra todos los paises y su info");
        return res.status(200).json([...countriesbd]);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}

const getDetailCountryHandler =  async (req, res) => {
    const {idPais} = req.params;
    try {
        //res.status(200).send("Muestra el detalle de un país específico."+id);
        if (idPais.length === 3) {
            const countryDetail = await getDetailCountryById(idPais);
            if(countryDetail) return res.status(200).json(countryDetail);
            res.status(406).json("No hay registros con ese id");
        }
        else{
            res.status(406).json("Longitud de id no valida");
        }
    } catch (error) {
        res.status(400).json({error: error});
    }
    
}

const postAllCountriesHandler = async (req, res) => {
    try {
        const response = postAllCountries();
        console.log("res", response);
        if(response) res.status(202).send("Todo ok");
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getCountriesHandler,
    getDetailCountryHandler,
    postAllCountriesHandler
}