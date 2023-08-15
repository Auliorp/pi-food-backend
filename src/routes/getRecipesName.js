const { Router } = require("express");
const getRecipesNameHandlers = require("../handlers/getRecipesNameHandlers");

const getRecipesName = Router();
getRecipesName.get("/recipes?", getRecipesNameHandlers);

module.exports = getRecipesName;
