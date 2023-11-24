const { 
    createActivity,
    createSeason,
    getSeasons,
    createDifficulty,
    getActivities, 
    editActivity,
    deleteActivity,
    getDifficulty
} = require("../controllers/activitiesController");

const getActivitiesHandler = async (req, res) => {
    //res.status(200).send("Muestra todas las actividades");
    try {
        const response = await getActivities();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

const postActivitiesHandler = async (req, res) => {
    const {nombre, dificultad, duracion, temporada, idCountry} = req.body;
    //res.status(200).send("Agrega una nueva actiovidad a la BD con su respetiva relacion");
    try {
        const response = await createActivity(nombre, duracion, temporada, dificultad, idCountry);  
        if (response) {
            res.status(201).json(response);
        }
        else{
            res.status(406).json("Ya existe una actividad con ese nombre");
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateActivityHandler = async (req, res) => {
    const {nombre, dificultad, duracion, temporada} = req.body;
    const {idActivity} = req.params;
    //res.status(200).send("Actualiza una determinada actividad");
    try {
        const response = await editActivity(idActivity, nombre, duracion, temporada, dificultad);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deleteActivityHandler = async (req, res) => {
    const {idActivity} = req.params;
    //res.status(200).send("Elimina una determinada actividad "+ idActivity);
    try {
        const response = await deleteActivity(idActivity);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const postSeasonHandler = async (req, res) => {
    const {temporada} = req.query;
    //res.status(200).send("Agregar actividad" + temporada);
    try {
        const response = await createSeason(temporada);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getSeasonsHandler = async (req, res) => {
    try {
        const response = await getSeasons();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const postDifficultyHandler = async (req, res) => {
    const {dificultad} = req.body;
    //res.status(200).send("Agregar dificultad" + dificultad);
    try {
        const response = await createDifficulty(dificultad);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getDifficultyHandler = async (req, res) => {
    //res.status(200).send("Obtener dificultades");   
    try {
        const response = await getDifficulty();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getActivitiesHandler,
    postActivitiesHandler, 
    updateActivityHandler,
    postSeasonHandler,
    getSeasonsHandler,
    postDifficultyHandler,
    deleteActivityHandler,
    getDifficultyHandler
}