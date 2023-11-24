const filterDataCountriesAPI = (countries) => {
    return countries.map( (country) => {
        return {
            id: country.cca3,
            nombre: country.translations.spa.common,
            imagenBandera: country.flags.png,
            capital: country.capital ? country.capital[0] : null,
            area: country.area,
            continente: country.continents[0],
            subregion: country.subregion ? country.subregion : null,
            poblacion: country.population
        }
    });
};

const filterCountriesAPI = (countries, name, id) => {
    if (id) {
        const countriesById = countries.filter(country => country.cca3 === id); 
        return filterDataCountriesAPI(countriesById);
    }
    const countriesByName =  countries.filter( country => country.name.official.toLowerCase().includes(name.toLowerCase()));
    return filterDataCountriesAPI(countriesByName);
};

module.exports = {
    filterDataCountriesAPI,
    filterCountriesAPI,
}