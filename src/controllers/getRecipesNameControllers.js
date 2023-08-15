const axios = require("axios");
const { Recipe, Diets } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;

const parseRecipe = (arr) =>
   arr.map((element) => {
      return {
         id: element.id,
         name: element.title || element.name,
         image: element.image,
         description: element.description,
         diets: element.diets,
         healthScore: element.healthScore,
      };
   });

const getRecipesNameControllers = async (name) => {
   const { data } = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=20&addRecipeInformation=true`
   );
   const dbData = await getAllRecipesControllers();

   const storeRecipe = parseRecipe(data.results.concat(dbData));

   const filterApi = storeRecipe.filter((recipe) =>
      recipe?.name?.toLowerCase()?.includes(name?.toLowerCase())
   );
   if (filterApi.length) {
      const response = [...filterApi];
      return response;
   }
   return storeRecipe;
};

const getAllRecipesControllers = async () => {
   const verifyRecipes = await Recipe.findAll({
      include: {
         model: Diets,
         attributes: ["nombre"],
         through: { attributes: [] },
      },
   });
   for (let i = 0; i < verifyRecipes.length; i++) {
      for (let j = 0; j < verifyRecipes[i].dataValues.diets.length; j++) {
         verifyRecipes[i].dataValues.diets[j] =
            verifyRecipes[i].dataValues.diets[j].dataValues.nombre;
      }
   }

   const recipesData = verifyRecipes.map((recipe) => recipe.dataValues);

   return recipesData;
};

module.exports = getRecipesNameControllers;
