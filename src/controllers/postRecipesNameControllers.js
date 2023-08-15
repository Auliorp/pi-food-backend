const { Recipe, Diets } = require("../db");

const postRecipesNameControllers = async (
   id,
   name,
   image,
   description,
   healthScore,
   steps,
   diets
) => {
   const newRecipe = await Recipe.create({
      id,
      name,
      image,
      description,
      healthScore,
      steps,
      diets,
   });

   const dietsMap = await Promise.all(
      diets.map(async (die) => await Diets.findOne({ where: { nombre: die } }))
   );
   newRecipe.addDiets(dietsMap);

   return newRecipe;
};

module.exports = postRecipesNameControllers;
