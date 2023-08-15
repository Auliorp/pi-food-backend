const axios = require("axios");
const dotenv = require("dotenv");
const { Diets } = require("../db");

dotenv.config();

const { API_KEY } = process.env;

const getDietsControllers = async () => {
   const verifyDiets = await Diets.findAll();

   if (!verifyDiets.length) {
      const { data } = await axios(
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=2&addRecipeInformation=true`
      );

      const apiDiets = data.results.map((diet) => {
         return (diets = diet.diets);
      });

      const dietsNoRepeated = [];

      for (let i = 0; i < apiDiets.length; i++) {
         apiDiets[i].forEach((diet) => {
            if (!dietsNoRepeated.includes(diet)) {
               dietsNoRepeated.push(diet);
            }
         });
      }

      const loadDataBase = dietsNoRepeated.map((repet) => {
         return {
            nombre: repet,
         };
      });
      const databaseDiets = await Diets.bulkCreate(loadDataBase);
      return databaseDiets;
   }
   return verifyDiets;
};

module.exports = getDietsControllers;
