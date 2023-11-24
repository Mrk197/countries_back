const { Router } = require("express");
const { 
    getActivitiesHandler,
    postActivitiesHandler,
    updateActivityHandler,
    postSeasonHandler,
    postDifficultyHandler,
    deleteActivityHandler,
    getSeasonsHandler,
    getDifficultyHandler
} = require("../handlers/activitiesHandler");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);

activitiesRouter.post("/", postActivitiesHandler);

activitiesRouter.put("/:idActivity", updateActivityHandler);

activitiesRouter.delete("/:idActivity", deleteActivityHandler);

activitiesRouter.post("/season", postSeasonHandler);

activitiesRouter.get("/season", getSeasonsHandler);

activitiesRouter.post("/difficulty", postDifficultyHandler);

activitiesRouter.get("/difficulty", getDifficultyHandler);

module.exports = activitiesRouter;