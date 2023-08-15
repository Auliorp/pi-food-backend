const axios = require("axios");
const dotenv = require("dotenv");
const { Recipe, Diets } = require("../db");

dotenv.config();

const { API_KEY } = process.env;

const getRecipesIdRecipeControllers = async (id) => {
   try {
      const { data } = await axios(
         `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      const newRecipe = {
         id: id,
         name: data.title,
         image: data.image,
         description: data.summary,
         healthScore: data.healthScore,
         steps: data.dishTypes,
         diets: data.diets,
      };

      return newRecipe;
   } catch (error) {
      console.error(error);
      const verifyRecipeDb = await Recipe.findOne({
         where: { id },
         include: {
            model: Diets,
            as: "diets",
         },
      });

      const newRecipe = {
         id: id,
         name: verifyRecipeDb.name,
         image: verifyRecipeDb.image,
         description: verifyRecipeDb.description,
         healthScore: verifyRecipeDb.healthScore,
         steps: verifyRecipeDb.steps.split(","),
         diets: verifyRecipeDb.diets.map((diet) => diet.nombre),
      };

      return newRecipe;
   }
};

module.exports = getRecipesIdRecipeControllers;
