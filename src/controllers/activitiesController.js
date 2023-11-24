//Obtener modelos
const {Activity, Season, Difficulty, Country} = require("../db");

const createActivity = async (nombre, duracion, temporada, dificultad, idcountry) => {
    const [newActivity, created] = await Activity.findOrCreate({
        where: { nombre },   
        defaults:{nombre, duracion, season_id: temporada,  difficulty_id: dificultad}
    });
    if (created) {
        idcountry.forEach( async id => {
            const getCountry = await Country.findByPk(id);
            getCountry.addActivity(newActivity);
        });
        return newActivity;
    }
    return created;
};

const createDifficulty = async (dificultad) => {
    return await Difficulty.create({dificultad});
};

const createSeason = async (temporada) => {
    return await Season.create({temporada});
};

const getSeasons = async() => {
    return await Season.findAll();
};

const getDifficulty = async() => {
    return await Difficulty.findAll();
};

const getActivities = async () => {
    return await Activity.findAll(
        {
            attributes: ['id', 'nombre', 'duracion'],
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
    );
}

const editActivity = async (id, nombre, duracion, temporada, dificultad) => {
    const editedActivity = await Activity.update(
       { nombre, duracion, season_id: temporada,  difficulty_id: dificultad },
       { where: {id} }
       );
    return editedActivity;
};

const deleteActivity = async (id) => {
    const deletedActivity = await Activity.destroy({ where: {id} });
    return deletedActivity;
};

module.exports = {
    createActivity,
    createSeason,
    createDifficulty,
    getActivities,
    editActivity,
    deleteActivity,
    getSeasons,
    getDifficulty
}