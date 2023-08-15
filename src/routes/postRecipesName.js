const { Router } = require("express");
const postRecipesNameHandlers = require("../handlers/postRecipesNameHandlers");

const postRecipesName = Router();
postRecipesName.post("/recipe", postRecipesNameHandlers);

module.exports = postRecipesName;
 