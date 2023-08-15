const { Router } = require("express");
const getRecipesIdRecipeHandlers = require("../handlers/getRecipesIdRecipeHandlers");

const getRecipeIdRecipe = Router();
getRecipeIdRecipe.get("/recipe/:id", getRecipesIdRecipeHandlers);

module.exports = getRecipeIdRecipe;
