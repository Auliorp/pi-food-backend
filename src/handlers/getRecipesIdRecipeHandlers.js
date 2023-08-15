const getRecipesIdRecipeControllers = require("../controllers/getRecipesIdRecipeControllers");

const getRecipesIdRecipeHandlers = async (request, response) => {
   const { id } = request.params;

   try {
      const result = await getRecipesIdRecipeControllers(id);
      response.status(200).json(result);
   } catch (error) {
      response.status(404).json({ error: error.message });
   }
};

module.exports = getRecipesIdRecipeHandlers;
