 const postRecipesNameControllers = require("../controllers/postRecipesNameControllers");

const postRecipesNameHandlers = async (request, response) => {
   const { id, name, image, description, healthScore, steps, diets } =
      request.body;
   try {
      const result = await postRecipesNameControllers(
         id,
         name,
         image,
         description,
         healthScore,
         steps,
         diets
      );
      response.status(200).json(result);
   } catch (error) {
      response.status(404).json({ error: error.message });
   }
};

module.exports = postRecipesNameHandlers;
