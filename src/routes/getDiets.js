const { Router } = require("express");
const getDietsHandlers = require("../handlers/getDietsHandlers");

const getDiets = Router();
getDiets.get("/diets", getDietsHandlers);

module.exports = getDiets;
